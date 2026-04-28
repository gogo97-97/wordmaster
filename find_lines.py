import os

file_path = r'c:\Users\gorke\OneDrive\Desktop\word-game\kelimeler.txt'

encodings = ['utf-8', 'utf-16', 'utf-16-le', 'utf-16-be', 'latin-1', 'cp1254']

for enc in encodings:
    try:
        with open(file_path, 'r', encoding=enc) as f:
            lines = f.readlines()
            print(f"Testing encoding: {enc}")
            count = 0
            for i, line in enumerate(lines):
                if '| (' in line and line.strip().endswith(')'):
                    print(f"Line {i+1}: {line.strip()}")
                    count += 1
                if count >= 20:
                    break
            if count > 0:
                print(f"Found {count} matches with {enc}")
                break
    except Exception as e:
        print(f"Failed with {enc}: {e}")
