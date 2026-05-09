#!/usr/bin/env node

/**
 * Script to configure CORS allowed origins in Supabase
 * Run this after deployment to Vercel
 */

const https = require('https');

// Configuration
const SUPABASE_PROJECT_URL = 'https://bhzazojyhvgkmzgmkmni.supabase.co';
const VERCEL_URL = 'https://personal-expense-monitor.vercel.app';
const LOCALHOST_DEV = 'http://localhost:5173';

// Parse URL from SUPABASE_URL
const url = new URL(SUPABASE_PROJECT_URL);
const projectRef = url.hostname.split('.')[0];

const allowedOrigins = [
  VERCEL_URL,
  LOCALHOST_DEV,
  'http://localhost:3000',
];

console.log('Configuring CORS for Supabase project:', projectRef);
console.log('Allowed origins:', allowedOrigins);
console.log('\n✅ CORS Configuration Ready!');
console.log('\nTo complete the setup, do one of the following:\n');

console.log('OPTION 1: Via Supabase Dashboard (Recommended)');
console.log('─'.repeat(50));
console.log('1. Go to https://app.supabase.com');
console.log('2. Select your project: personal-expense-tracker');
console.log('3. Go to Settings → API');
console.log('4. Find "Allowed Origins" section');
console.log('5. Add these URLs (one per line or comma-separated):');
allowedOrigins.forEach(origin => console.log(`   - ${origin}`));
console.log('6. Click Save\n');

console.log('OPTION 2: Via cURL (Advanced)');
console.log('─'.repeat(50));
console.log('First, get your Management API token from Supabase dashboard:');
console.log('Settings → Access Tokens → Generate New Token\n');
console.log('Then run:');
console.log(`curl -X PUT https://api.supabase.com/v1/projects/${projectRef}/auth/config \\`);
console.log('  -H "Authorization: Bearer YOUR_MANAGEMENT_TOKEN" \\');
console.log('  -H "Content-Type: application/json" \\');
console.log(`  -d '{"allowed_origins": [${allowedOrigins.map(o => `"${o}"`).join(', ')}]}'`);
console.log('\n');

console.log('After configuring CORS, redeploy your app:');
console.log('─'.repeat(50));
console.log('$ npm run build');
console.log('$ vercel --prod\n');
