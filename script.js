// Words data is now loaded from data.js

let currentIndex = 0;

const wordEl = document.getElementById('word');
const posEl = document.getElementById('pos');
const translationEl = document.getElementById('translation');
const sentenceEl = document.getElementById('sentence');
const flashcardEl = document.getElementById('flashcard');
const nextBtn = document.getElementById('next-btn');
const progressText = document.getElementById('progress-text');

function updateCard() {
    const data = wordsData[currentIndex];
    
    // Update content
    wordEl.textContent = data.word;
    posEl.textContent = data.pos;
    translationEl.textContent = data.translation;
    
    if (data.sentence && data.sentence.trim() !== "") {
        sentenceEl.textContent = `"${data.sentence}"`;
        sentenceEl.style.display = 'block';
    } else {
        sentenceEl.textContent = "";
        sentenceEl.style.display = 'none';
    }
    
    // Update progress
    progressText.textContent = `${currentIndex + 1} / ${wordsData.length}`;
}

function nextCard() {
    // Start exit animation
    flashcardEl.classList.remove('slide-in');
    flashcardEl.classList.add('slide-out');
    
    // Disable button during animation
    nextBtn.disabled = true;
    
    setTimeout(() => {
        // Update data index randomly
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * wordsData.length);
        } while (nextIndex === currentIndex && wordsData.length > 1);
        currentIndex = nextIndex;
        
        // Update content while hidden
        updateCard();
        
        // Start enter animation
        flashcardEl.classList.remove('slide-out');
        flashcardEl.classList.add('slide-in');
        
        // Re-enable button
        setTimeout(() => {
            nextBtn.disabled = false;
        }, 500); // Wait for enter animation to finish
        
    }, 400); // Wait for exit animation to finish
}

// Initial load
updateCard();
flashcardEl.classList.add('slide-in');

// Event listener
nextBtn.addEventListener('click', nextCard);

// Search functionality
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchResults.innerHTML = '';
    
    if (query.length === 0) {
        searchResults.style.display = 'none';
        return;
    }
    
    const matches = wordsData.filter(item => 
        item.word.toLowerCase().includes(query) || 
        item.translation.toLowerCase().includes(query)
    ).slice(0, 5); // Limit to 5 results
    
    if (matches.length > 0) {
        matches.forEach(match => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML = `
                <span class="search-result-word">${match.word}</span>
                <span class="search-result-translation">${match.translation}</span>
            `;
            div.addEventListener('click', () => {
                const index = wordsData.indexOf(match);
                if (index !== -1) {
                    currentIndex = index;
                    
                    // Exit animation
                    flashcardEl.classList.remove('slide-in');
                    flashcardEl.classList.add('slide-out');
                    
                    setTimeout(() => {
                        updateCard();
                        flashcardEl.classList.remove('slide-out');
                        flashcardEl.classList.add('slide-in');
                    }, 400);
                    
                    searchInput.value = '';
                    searchResults.style.display = 'none';
                }
            });
            searchResults.appendChild(div);
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
    }
});

// Keyboard support (Space/Right Arrow for next)
document.addEventListener('keydown', (e) => {
    // Only trigger if we aren't typing in the search box
    if (e.target.tagName === 'INPUT') return;
    
    if (e.code === 'Space' || e.code === 'ArrowRight') {
        if (!nextBtn.disabled) {
            nextCard();
        }
    }
});
