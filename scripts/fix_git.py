#!/usr/bin/env python3
import subprocess
import sys

try:
    # Change to project directory
    import os
    os.chdir('/vercel/share/v0-project')
    
    # Check current git status
    print("[v0] Current git status:")
    result = subprocess.run(['git', 'status'], capture_output=True, text=True)
    print(result.stdout)
    print(result.stderr)
    
    # Get current remotes
    print("\n[v0] Current remotes:")
    result = subprocess.run(['git', 'remote', '-v'], capture_output=True, text=True)
    print(result.stdout)
    
    # Get current branch
    print("\n[v0] Current branch:")
    result = subprocess.run(['git', 'branch', '-a'], capture_output=True, text=True)
    print(result.stdout)
    
    # Try to fetch from origin
    print("\n[v0] Fetching from origin...")
    result = subprocess.run(['git', 'fetch', 'origin', 'main'], capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print("Error:", result.stderr)
    
    # Reset to origin/main
    print("\n[v0] Resetting to origin/main...")
    result = subprocess.run(['git', 'reset', '--hard', 'origin/main'], capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print("Error:", result.stderr)
        
    print("\n[v0] Git setup complete!")
    
except Exception as e:
    print(f"[v0] Error: {e}")
    sys.exit(1)
