#!/usr/bin/env python3
import subprocess
import sys

try:
    # Checkout main branch
    print("[v0] Checking out main branch...")
    result = subprocess.run(["git", "checkout", "main"], cwd="/vercel/share/v0-project", capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print(f"[v0] stderr: {result.stderr}")
    
    # Pull latest changes
    print("[v0] Pulling latest changes from main...")
    result = subprocess.run(["git", "pull", "origin", "main"], cwd="/vercel/share/v0-project", capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print(f"[v0] stderr: {result.stderr}")
    
    print("[v0] Successfully synced with main branch!")
    
except Exception as e:
    print(f"[v0] Error: {e}")
    sys.exit(1)
