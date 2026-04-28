const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'kelimeler.txt');
const outputPath = path.join(__dirname, 'data.js');

const knownPOS = [
    'Noun', 'Verb', 'Adjective', 'Adverb', 'Prep.', 'Pronoun', 'Article', 
    'Preposition', 'Conjunction', 'Interjection', 'Modal Verb', 'Adj.', 'Adv.', 
    'N.', 'V.', 'Prep', 'Pron', 'Conj', 'Det.', 'Number', 'Exclam.', 'Exclamation',
    'Pron.', 'Pronoun', 'Det.', 'Determiner'
];

try {
    const content = fs.readFileSync(inputPath, 'utf8');
    const lines = content.split(/\r?\n/);
    
    const wordsData = [];
    
    lines.forEach((line, index) => {
        if (!line.trim() || !line.includes('|')) return;
        
        const parts = line.split('|').map(p => p.trim());
        if (parts.length < 3) return;
        
        const word = parts[0];
        const sentence = parts[parts.length - 1];
        
        let posParts = [];
        let translationParts = [];
        
        // Smarter parsing for lines with multiple pipes
        for (let i = 1; i < parts.length - 1; i++) {
            const p = parts[i];
            // If it's a known POS or looks like one (e.g. "Noun / Verb")
            const isPOS = knownPOS.includes(p) || 
                          p.split('/').some(sp => knownPOS.includes(sp.trim())) ||
                          p.split('.').some(sp => knownPOS.includes(sp.trim() + '.'));
            
            if (isPOS) {
                posParts.push(p);
            } else {
                translationParts.push(p);
            }
        }
        
        // Fallback for simple 3-part lines or cases where parsing failed
        if (posParts.length === 0 && translationParts.length === 0) {
            // Should not happen with parts.length >= 3, but just in case
        } else if (posParts.length === 0) {
            posParts.push(translationParts.shift());
        } else if (translationParts.length === 0) {
            translationParts.push(posParts.pop());
        }
        
        wordsData.push({
            pos: posParts.join(' / '),
            word: word,
            translation: translationParts.join(' / '),
            sentence: sentence
        });
    });
    
    const outputContent = `const wordsData = ${JSON.stringify(wordsData, null, 4)};`;
    fs.writeFileSync(outputPath, outputContent, 'utf8');
    
    console.log(`Successfully converted ${wordsData.length} words to data.js`);
} catch (err) {
    console.error('Error during conversion:', err);
}
