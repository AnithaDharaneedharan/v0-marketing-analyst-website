import { execSync } from 'child_process';

try {
  console.log('Checking out main branch...');
  execSync('git checkout main', { cwd: '/vercel/share/v0-project', stdio: 'inherit' });
  
  console.log('Pulling latest code...');
  execSync('git pull origin main', { cwd: '/vercel/share/v0-project', stdio: 'inherit' });
  
  console.log('Successfully synced with main branch!');
} catch (error) {
  console.error('Error during git operations:', error.message);
  process.exit(1);
}
