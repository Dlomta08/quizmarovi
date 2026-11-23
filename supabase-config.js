// supabase-config.js — where the site finds its Supabase project.
//
// Both values are PUBLIC by design (anyone can see them in the page source),
// just like the Web3Forms key in feedback.js. Safety comes from the Row Level
// Security rules in supabase/schema.sql, not from hiding this key.
//
// NEVER put the "service_role" / secret key here or anywhere in the site:
// that key ignores all security rules.
window.SUPABASE_CONFIG = {
  url: 'https://kfdsufwykgzctdznzdfq.supabase.co',
  anonKey: 'sb_publishable_WHxgLz6ceCZBjhap8IZfbQ_OXyFfCLU',
  // Google OAuth "Client ID" (ends with .apps.googleusercontent.com). Also public by design.
  // Used for the login window with Google's button (auth.js). Empty = old redirect login.
  googleClientId: ''
};
