const fs = require('fs');

const filePath = 'c:\\Users\\gorke\\OneDrive\\Desktop\\word-game\\kelimeler.txt';

try {
    // Try reading as UTF-8 first
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    console.log("Read successful. Total lines:", lines.length);
    
    let count = 0;
    lines.forEach((line, index) => {
        if (line.includes('| (') && line.trim().endsWith(')')) {
            console.log(`Line ${index + 1}: ${line.trim()}`);
            count++;
        }
    });
    console.log("Total matches found:", count);
} catch (err) {
    console.error("Error reading file:", err);
}
