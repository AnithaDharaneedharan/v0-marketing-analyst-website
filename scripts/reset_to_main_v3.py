#!/usr/bin/env python3
import subprocess
import sys
import os

os.chdir('/vercel/share/v0-project')

try:
    print("[v0] Starting git reset process...")
    
    # Step 1: Fetch all from origin
    print("[v0] Fetching from origin...")
    result = subprocess.run(['git', 'fetch', 'origin', 'main'], capture_output=True, text=True)
    print(f"[v0] Fetch output: {result.stdout}")
    if result.returncode != 0:
        print(f"[v0] Fetch error: {result.stderr}")
    
    # Step 2: Reset to origin/main
    print("[v0] Resetting to origin/main...")
    result = subprocess.run(['git', 'reset', '--hard', 'origin/main'], capture_output=True, text=True)
    print(f"[v0] Reset output: {result.stdout}")
    if result.returncode != 0:
        print(f"[v0] Reset error: {result.stderr}")
        sys.exit(1)
    
    # Step 3: Check current status
    print("[v0] Checking git status...")
    result = subprocess.run(['git', 'status'], capture_output=True, text=True)
    print(f"[v0] Status:\n{result.stdout}")
    
    # Step 4: Get current commit
    print("[v0] Getting current commit...")
    result = subprocess.run(['git', 'log', '-1', '--oneline'], capture_output=True, text=True)
    print(f"[v0] Current commit: {result.stdout}")
    
    print("[v0] Git reset completed successfully!")
    
except Exception as e:
    print(f"[v0] Error during reset: {e}")
    sys.exit(1)
