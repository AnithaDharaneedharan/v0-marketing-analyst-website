#!/usr/bin/env python3
import subprocess
import os

os.chdir('/vercel/share/v0-project')

try:
    # Fetch the latest from remote
    print("Fetching latest from remote...")
    subprocess.run(['git', 'fetch', 'origin', 'main'], check=True, capture_output=True)
    print("✓ Fetched origin/main")
    
    # Check current branch
    result = subprocess.run(['git', 'branch', '--show-current'], capture_output=True, text=True, check=True)
    current_branch = result.stdout.strip()
    print(f"Current branch: {current_branch}")
    
    # Checkout main if not already on it
    if current_branch != 'main':
        print("Checking out main branch...")
        subprocess.run(['git', 'checkout', 'main'], check=True, capture_output=True)
        print("✓ Checked out main")
    
    # Reset to origin/main
    print("Resetting to origin/main...")
    subprocess.run(['git', 'reset', '--hard', 'origin/main'], check=True, capture_output=True)
    print("✓ Reset to origin/main")
    
    # Verify
    result = subprocess.run(['git', 'status'], capture_output=True, text=True, check=True)
    print("\nGit status:")
    print(result.stdout)
    
    print("\n✓ Successfully synced to main branch!")
    
except subprocess.CalledProcessError as e:
    print(f"Error: {e}")
    print(f"stderr: {e.stderr}")
    exit(1)
except Exception as e:
    print(f"Unexpected error: {e}")
    exit(1)
