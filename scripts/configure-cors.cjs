#!/usr/bin/env node

/**
 * Script to configure CORS allowed origins in Supabase
 * Run this after deployment to Vercel
 */

// Configuration
const SUPABASE_PROJECT_URL = 'https://bhzazojyhvgkmzgmkmni.supabase.co';
const VERCEL_URL = 'https://personal-expense-monitor.vercel.app';

// Parse URL from SUPABASE_URL
const url = new URL(SUPABASE_PROJECT_URL);
const projectRef = url.hostname.split('.')[0];

const allowedOrigins = [
  VERCEL_URL,
];

console.log('Configuring CORS for Vercel Deployment');
console.log('─'.repeat(50));
console.log('Project:', projectRef);
console.log('Allowed origin:', VERCEL_URL);
console.log('\n✅ CORS Configuration Instructions:\n');

console.log('1. Go to https://app.supabase.com');
console.log('2. Select your project: personal-expense-tracker');
console.log('3. Go to Settings → API');
console.log('4. Find "Allowed Origins" section');
console.log('5. Add this URL:');
console.log(`   ${VERCEL_URL}`);
console.log('6. Click Save\n');

console.log('OPTION 2: Via cURL (Advanced)');
console.log('Then rebuild and redeploy:');
console.log('─'.repeat(50));
console.log('$ npm run build');
console.log('$ vercel --prod\n');
