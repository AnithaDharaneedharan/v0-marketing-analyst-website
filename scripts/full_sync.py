#!/usr/bin/env python3
import subprocess
import os
import sys

os.chdir('/vercel/share/v0-project')

print("[v0] Fetching latest from remote...")
result = subprocess.run(['git', 'fetch', 'origin', 'main'], capture_output=True, text=True)
print(f"[v0] Fetch stdout: {result.stdout}")
if result.stderr:
    print(f"[v0] Fetch stderr: {result.stderr}")

print("\n[v0] Resetting to origin/main...")
result = subprocess.run(['git', 'reset', '--hard', 'origin/main'], capture_output=True, text=True)
print(f"[v0] Reset output: {result.stdout}")
if result.stderr:
    print(f"[v0] Reset stderr: {result.stderr}")

print("\n[v0] Checking current branch...")
result = subprocess.run(['git', 'branch', '-v'], capture_output=True, text=True)
print(f"[v0] Branches:\n{result.stdout}")

print("\n[v0] Showing recent commits...")
result = subprocess.run(['git', 'log', '--oneline', '-10'], capture_output=True, text=True)
print(f"[v0] Recent commits:\n{result.stdout}")

print("\n[v0] Listing all files in components/...")
result = subprocess.run(['ls', '-la', 'components/'], capture_output=True, text=True)
print(f"[v0] Components:\n{result.stdout}")

print("\n[v0] Listing public folder...")
result = subprocess.run(['find', '.', '-name', 'public', '-type', 'd'], capture_output=True, text=True)
print(f"[v0] Public folders:\n{result.stdout}")

print("\n[v0] Git status...")
result = subprocess.run(['git', 'status'], capture_output=True, text=True)
print(f"[v0] Status:\n{result.stdout}")

print("\n[v0] Sync complete!")
