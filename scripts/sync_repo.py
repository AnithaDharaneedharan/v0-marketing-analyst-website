#!/usr/bin/env python3
import subprocess
import os

os.chdir('/vercel/share/v0-project')

try:
    # Fetch from remote
    print("[v0] Fetching from origin...")
    result = subprocess.run(['git', 'fetch', 'origin', 'main'], capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print("STDERR:", result.stderr)
    
    # Checkout main branch
    print("[v0] Checking out main branch...")
    result = subprocess.run(['git', 'checkout', 'main'], capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print("STDERR:", result.stderr)
    
    # Pull latest changes
    print("[v0] Pulling latest changes...")
    result = subprocess.run(['git', 'pull', 'origin', 'main'], capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print("STDERR:", result.stderr)
    
    print("[v0] Repository synced successfully!")
    
except Exception as e:
    print(f"[v0] Error: {str(e)}")
