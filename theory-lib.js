/*
 * theory-lib.js — parses a theory page (theory/<topic-id>.md). Shared by theory.js (browser)
 * and tools/validate-theory.js + tools/build-theory-index.js (Node), so both read files the same way.
 *
 * File format:
 *   ---                         front matter: one "key: value" per line; lists as [a, b]; true/false
 *   id: quadratic-eq
 *   ...
 *   ---
 *   ## მთავარი იდეა             the six sections (SECTIONS), as "## " headings, in this order
 *   :::definition [title]       boxes: definition, theorem, formula, note
 *   :::example მარტივი           worked example; inside it a :::solution block (hidden until clicked)
 *   :::check                    self-check question; inside it an :::answer block (hidden)
 *   :::                         closes the innermost open block
 *   Math: $...$ inline, $$...$$ display (KaTeX). Math is cut out before Markdown runs and put back
 *   afterwards, so Markdown can't change "_", "*" or "\\" inside formulas.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.TheoryLib = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const FIELDS = ["id", "title", "area", "group", "grades", "prerequisites", "next", "reviewed"];
  const LIST_FIELDS = ["grades", "prerequisites", "next"];

  // [heading, required]. "დამტკიცება" may be replaced by "რატომ მუშაობს" or left out.
  const SECTIONS = [
    { ka: "მთავარი იდეა", required: true },
    { ka: "განმარტებები და ფორმულები", required: true },
    { ka: "დამტკიცება", alt: ["რატომ მუშაობს"], required: false },
    { ka: "ამოხსნილი მაგალითები", required: true },
    { ka: "გავრცელებული შეცდომები", required: true },
    { ka: "შეამოწმე თავი", required: true },
  ];
  const BLOCKS = ["definition", "theorem", "formula", "note", "example", "solution", "check", "answer"];
  const BOX_LABELS = { definition: "განმარტება", theorem: "თეორემა", formula: "ფორმულა", note: "შენიშვნა" };
  const LEVELS = ["მარტივი", "საშუალო", "რთული"];

  /** Splits "---\nkey: value\n---\n body" into { meta, body, errors }. */
  function frontMatter(src) {
    src = src.replace(/^﻿/, "");
    const m = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(src);
    if (!m) return { meta: {}, body: src, errors: ["front matter (--- ... ---) is missing"] };
    const meta = {}, errors = [];
    m[1].split(/\r?\n/).forEach((line, i) => {
      if (!line.trim()) return;
      const kv = /^([a-z]+):[ \t]*(.*)$/.exec(line);
      if (!kv) { errors.push(`front matter line ${i + 2} is not "key: value": ${line}`); return; }
      const [, key, raw] = kv;
      let v = raw.trim();
      if (LIST_FIELDS.includes(key)) {
        if (!/^\[.*\]$/.test(v)) { errors.push(`${key} must be a list like [a, b]`); v = []; }
        else v = v.slice(1, -1).split(",").map(s => s.trim()).filter(Boolean).map(s => (/^\d+$/.test(s) ? +s : s));
      } else if (v === "true" || v === "false") v = v === "true";
      if (key in meta) errors.push(`${key} appears twice`);
      meta[key] = v;
    });
    return { meta, body: src.slice(m[0].length), errors };
  }

  /** Replaces math with @@M<n>@@ placeholders; returns { text, math: [{ tex, display }] }. */
  function protectMath(text) {
    const math = [];
    // an escaped dollar (\$) is a plain "$" in the text: kept as @@D@@ until restoreMath
    const put = (tex, display) => `@@M${math.push({ tex: tex.trim().replace(/@@D@@/g, "\\$"), display }) - 1}@@`;
    text = text
      .replace(/\\\$/g, "@@D@@")
      .replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => put(tex, true))
      .replace(/(^|[^$])\$(?!\$)([^$\n]+?)\$/gm, (_, pre, tex) => pre + put(tex, false));
    return { text, math };
  }

  /** Puts math back; render(tex, display) returns HTML. A punctuation mark right after inline math is
   *  rendered inside the formula, so it never starts a new line, while a long formula can still wrap. */
  function restoreMath(html, math, render) {
    return html.replace(/@@D@@/g, "$").replace(/@@M(\d+)@@([.,;:!?)]*)/g, (_, i, punct) => {
      const { tex, display } = math[+i];
      return punct && !display ? render(`${tex}{${punct}}`, false) : render(tex, display) + punct;
    });
  }

  /**
   * Splits the body into a tree of ::: blocks:
   *   { kind: "root" | block name, title, line, children: [ markdown string | node ] }
   * Returns { tree, errors }.
   */
  function parseBlocks(body) {
    const root = { kind: "root", title: "", line: 0, children: [] };
    const stack = [root], errors = [];
    let buf = [];
    const flush = () => {
      if (buf.length) { stack[stack.length - 1].children.push(buf.join("\n")); buf = []; }
    };
    body.split(/\r?\n/).forEach((line, i) => {
      const t = line.trim();
      const open = /^:::([a-z]+)\s*(.*)$/.exec(t);
      if (open) {
        flush();
        if (!BLOCKS.includes(open[1])) errors.push(`line ${i + 1}: unknown block ":::${open[1]}"`);
        const node = { kind: open[1], title: open[2].trim(), line: i + 1, children: [] };
        stack[stack.length - 1].children.push(node);
        stack.push(node);
      } else if (t === ":::") {
        flush();
        if (stack.length > 1) stack.pop();
        else errors.push(`line ${i + 1}: ":::" closes nothing`);
      } else buf.push(line);
    });
    flush();
    stack.slice(1).forEach(n => errors.push(`line ${n.line}: ":::${n.kind}" is never closed`));
    return { tree: root, errors };
  }

  /** Section headings ("## ...") in order, from the top level of the tree. */
  function headings(tree) {
    const out = [];
    tree.children.forEach(c => {
      if (typeof c !== "string") return;
      c.split(/\r?\n/).forEach(l => { const m = /^##\s+(.+?)\s*$/.exec(l); if (m) out.push(m[1]); });
    });
    return out;
  }

  /** Rough word count of the text a reader sees (formulas count as one word). */
  function wordCount(body) {
    const text = body
      .replace(/^---[\s\S]*?---/, "")
      .replace(/\$\$[\s\S]+?\$\$/g, " F ")
      .replace(/\$[^$\n]+?\$/g, " F ")
      .replace(/^:::.*$/gm, " ")
      .replace(/[#*_>`|-]/g, " ");
    return (text.match(/[\p{L}\p{N}]+/gu) || []).length;
  }

  /** Everything the tools and the page need from one file. */
  function parse(src) {
    const fm = frontMatter(src);
    const { text, math } = protectMath(fm.body);
    const blocks = parseBlocks(text);
    return {
      meta: fm.meta,
      body: fm.body,
      text,
      math,
      tree: blocks.tree,
      headings: headings(blocks.tree),
      words: wordCount(fm.body),
      errors: fm.errors.concat(blocks.errors),
    };
  }

  return { FIELDS, LIST_FIELDS, SECTIONS, BLOCKS, BOX_LABELS, LEVELS,
           frontMatter, protectMath, restoreMath, parseBlocks, headings, wordCount, parse };
});
