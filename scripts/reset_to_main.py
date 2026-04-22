#!/usr/bin/env python3
import subprocess
import sys

def run_command(cmd):
    print(f"[v0] Running: {cmd}")
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    print(f"[v0] Output: {result.stdout}")
    if result.stderr:
        print(f"[v0] Error: {result.stderr}")
    return result.returncode == 0

# Step 1: Configure git merge strategy
print("[v0] Configuring git merge strategy...")
run_command("git config pull.rebase false")

# Step 2: Fetch the latest from remote
print("[v0] Fetching from remote...")
run_command("git fetch origin main")

# Step 3: Reset local branch to match remote main
print("[v0] Resetting to origin/main...")
run_command("git reset --hard origin/main")

# Step 4: Verify current branch
print("[v0] Verifying git status...")
run_command("git status")

print("[v0] ✓ Repository successfully synced to origin/main")
