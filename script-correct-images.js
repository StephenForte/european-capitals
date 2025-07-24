// European countries data with flags, populations, capitals, and capital images
const europeanCountries = [
    {
        name: "Germany",
        flag: "https://flagcdn.com/w320/de.png",
        population: "83,240,000",
        capital: "Berlin",
        capitalImage: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&h=600&fit=crop"
    },
    {
        name: "France",
        flag: "https://flagcdn.com/w320/fr.png",
        population: "67,390,000",
        capital: "Paris",
        capitalImage: "https://images.unsplash.com/photo-1502602898534-47d22c0d3b3c?w=800&h=600&fit=crop"
    },
    {
        name: "Italy",
        flag: "https://flagcdn.com/w320/it.png",
        population: "60,360,000",
        capital: "Rome",
        capitalImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop"
    },
    {
        name: "Spain",
        flag: "https://flagcdn.com/w320/es.png",
        population: "47,350,000",
        capital: "Madrid",
        capitalImage: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop"
    },
    {
        name: "Poland",
        flag: "https://flagcdn.com/w320/pl.png",
        population: "37,950,000",
        capital: "Warsaw",
        capitalImage: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800&h=600&fit=crop"
    },
    {
        name: "Netherlands",
        flag: "https://flagcdn.com/w320/nl.png",
        population: "17,180,000",
        capital: "Amsterdam",
        capitalImage: "https://images.unsplash.com/photo-1512470876302-972faa02aa51?w=800&h=600&fit=crop"
    },
    {
        name: "Belgium",
        flag: "https://flagcdn.com/w320/be.png",
        population: "11,590,000",
        capital: "Brussels",
        capitalImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop"
    },
    {
        name: "Sweden",
        flag: "https://flagcdn.com/w320/se.png",
        population: "10,350,000",
        capital: "Stockholm",
        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"
    },
    {
        name: "Austria",
        flag: "https://flagcdn.com/w320/at.png",
        population: "9,040,000",
        capital: "Vienna",
        capitalImage: "https://images.unsplash.com/photo-1516564195738-e287dfbbf0f5?w=800&h=600&fit=crop"
    },
    {
        name: "Switzerland",
        flag: "https://flagcdn.com/w320/ch.png",
        population: "8,700,000",
        capital: "Bern",
        capitalImage: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&h=600&fit=crop"
    },
    {
        name: "Denmark",
        flag: "https://flagcdn.com/w320/dk.png",
        population: "5,830,000",
        capital: "Copenhagen",
        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"
    },
    {
        name: "Norway",
        flag: "https://flagcdn.com/w320/no.png",
        population: "5,420,000",
        capital: "Oslo",
        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"
    },
    {
        name: "Finland",
        flag: "https://flagcdn.com/w320/fi.png",
        population: "5,540,000",
        capital: "Helsinki",
        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"
    },
    {
        name: "Portugal",
        flag: "https://flagcdn.com/w320/pt.png",
        population: "10,300,000",
        capital: "Lisbon",
        capitalImage: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop"
    },
    {
        name: "Greece",
        flag: "https://flagcdn.com/w320/gr.png",
        population: "10,720,000",
        capital: "Athens",
        capitalImage: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=800&h=600&fit=crop"
    },
    {
        name: "Czech Republic",
        flag: "https://flagcdn.com/w320/cz.png",
        population: "10,700,000",
        capital: "Prague",
        capitalImage: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&h=600&fit=crop"
    },
    {
        name: "Hungary",
        flag: "https://flagcdn.com/w320/hu.png",
        population: "9,700,000",
        capital: "Budapest",
        capitalImage: "https://images.unsplash.com/photo-1551867633-194f125695d8?w=800&h=600&fit=crop"
    },
    {
        name: "Ireland",
        flag: "https://flagcdn.com/w320/ie.png",
        population: "4,990,000",
        capital: "Dublin",
        capitalImage: "https://images.unsplash.com/photo-1549918864-48acff761f1b?w=800&h=600&fit=crop"
    },
    {
        name: "Croatia",
        flag: "https://flagcdn.com/w320/hr.png",
        population: "4,050,000",
        capital: "Zagreb",
        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"
    },
    {
        name: "Slovakia",
        flag: "https://flagcdn.com/w320/sk.png",
        population: "5,460,000",
        capital: "Bratislava",
        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"
    }
];

// Non-European capitals for wrong answers
const nonEuropeanCapitals = [
    "Tokyo", "Beijing", "New Delhi", "Bangkok", "Seoul", "Jakarta", "Manila", "Hanoi",
    "Washington D.C.", "Ottawa", "Mexico City", "Brasília", "Buenos Aires", "Lima", "Santiago",
    "Cairo", "Nairobi", "Lagos", "Johannesburg", "Cape Town", "Casablanca", "Algiers",
    "Sydney", "Melbourne", "Wellington", "Auckland", "Port Moresby"
];

// Game state
let currentCountry = null;
let currentOptions = [];
let score = 0;
let totalQuestions = 0;
let answered = false;
let preloadedImages = new Map();
let gameMode = 'infinite'; // 'infinite' or 'quiz'
let questionsAnswered = 0;
let totalQuizQuestions = 10;
let quizResults = [];
let playerName = 'Player';
let usedCountries = []; // Track used countries in quiz mode

// DOM elements
const startPage = document.getElementById('start-page');
const gamePage = document.getElementById('game-page');
const playerNameInput = document.getElementById('player-name');
const playerDisplayName = document.getElementById('player-display-name');
const startQuizBtn = document.getElementById('start-quiz-btn');
const startInfiniteBtn = document.getElementById('start-infinite-btn');
const backToStartBtn = document.getElementById('back-to-start-btn');

const countryNameEl = document.getElementById('country-name');
const countryFlagEl = document.getElementById('country-flag');
const countryPopulationEl = document.getElementById('country-population');
const capitalImageEl = document.getElementById('capital-image');
const optionsContainerEl = document.getElementById('options-container');
const resultSectionEl = document.getElementById('result-section');
const resultMessageEl = document.getElementById('result-message');
const correctAnswerEl = document.getElementById('correct-answer');
const nextBtn = document.getElementById('next-btn');
const nextQuizBtn = document.getElementById('next-quiz-btn');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');

// Preload images to prevent flickering
function preloadImages() {
    europeanCountries.forEach(country => {
        const img = new Image();
        img.src = country.flag;
        preloadedImages.set(country.flag, img);
        
        const capitalImg = new Image();
        capitalImg.src = country.capitalImage;
        preloadedImages.set(country.capitalImage, capitalImg);
    });
}

// Initialize the game
function initGame() {
    // Preload all images first
    preloadImages();
    
    // Event listeners for start page
    startQuizBtn.addEventListener('click', () => startGame('quiz'));
    startInfiniteBtn.addEventListener('click', () => startGame('infinite'));
    backToStartBtn.addEventListener('click', showStartPage);
    
    // Event listeners for game
    nextBtn.addEventListener('click', loadNewQuestion);
    nextQuizBtn.addEventListener('click', resetGame);
    
    // Enter key for name input
    playerNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            startGame('quiz');
        }
    });
}

// Start the game
function startGame(mode) {
    const name = playerNameInput.value.trim() || 'Player';
    playerName = name;
    playerDisplayName.textContent = name;
    
    gameMode = mode;
    score = 0;
    totalQuestions = 0;
    answered = false;
    questionsAnswered = 0;
    quizResults = [];
    usedCountries = []; // Reset used countries
    
    showGamePage();
    
    // Start the game after a short delay to ensure images are loaded
    setTimeout(() => {
        loadNewQuestion();
        updateStats();
    }, 500);
}

// Show start page
function showStartPage() {
    startPage.style.display = 'block';
    gamePage.style.display = 'none';
    
    // Reset game state
    score = 0;
    totalQuestions = 0;
    answered = false;
    questionsAnswered = 0;
    quizResults = [];
    gameMode = 'infinite';
    usedCountries = [];
    
    updateStats();
}

// Show game page
function showGamePage() {
    startPage.style.display = 'none';
    gamePage.style.display = 'block';
}

// Get a random country that hasn't been used in quiz mode
function getRandomCountry() {
    if (gameMode === 'quiz') {
        // Filter out already used countries
        const availableCountries = europeanCountries.filter(country => 
            !usedCountries.includes(country.name)
        );
        
        // If we've used all countries, reset the used list
        if (availableCountries.length === 0) {
            usedCountries = [];
            return europeanCountries[Math.floor(Math.random() * europeanCountries.length)];
        }
        
        return availableCountries[Math.floor(Math.random() * availableCountries.length)];
    } else {
        // Infinite mode - can repeat countries
        return europeanCountries[Math.floor(Math.random() * europeanCountries.length)];
    }
}

// Load a new question
function loadNewQuestion() {
    // Reset state
    answered = false;
    resultSectionEl.style.display = 'none';
    nextBtn.style.display = 'none';
    nextQuizBtn.style.display = 'none';
    
    // Select random country (respecting quiz mode constraints)
    currentCountry = getRandomCountry();
    
    // Add to used countries if in quiz mode
    if (gameMode === 'quiz') {
        usedCountries.push(currentCountry.name);
    }
    
    // Update country info with smooth transitions
    updateCountryInfo();
    
    // Generate options
    generateOptions();
    
    // Update total questions
    totalQuestions++;
    updateStats();
}

// Update country information with smooth transitions
function updateCountryInfo() {
    // Add loading state
    countryNameEl.textContent = "Loading...";
    countryPopulationEl.textContent = "-";
    
    // Preload the new images before updating
    const flagImg = new Image();
    const capitalImg = new Image();
    
    flagImg.onload = () => {
        countryFlagEl.src = currentCountry.flag;
    };
    
    capitalImg.onload = () => {
        capitalImageEl.src = currentCountry.capitalImage;
    };
    
    flagImg.src = currentCountry.flag;
    capitalImg.src = currentCountry.capitalImage;
    
    // Update text content
    countryNameEl.textContent = currentCountry.name;
    countryPopulationEl.textContent = currentCountry.population;
}

// Generate 4 options: 1 correct + 3 wrong
function generateOptions() {
    const correctAnswer = currentCountry.capital;
    
    // Get 3 random non-European capitals
    const wrongOptions = [];
    const shuffledNonEuropean = [...nonEuropeanCapitals].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < 3; i++) {
        wrongOptions.push(shuffledNonEuropean[i]);
    }
    
    // Combine and shuffle all options
    currentOptions = [correctAnswer, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    // Create option buttons
    optionsContainerEl.innerHTML = '';
    currentOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => selectOption(option, button));
        optionsContainerEl.appendChild(button);
    });
}

// Handle option selection
function selectOption(selectedAnswer, buttonElement) {
    if (answered) return;
    
    answered = true;
    const correctAnswer = currentCountry.capital;
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Update score
    if (isCorrect) {
        score++;
        updateStats();
    }
    
    // Store quiz result if in quiz mode
    if (gameMode === 'quiz') {
        quizResults.push({
            country: currentCountry.name,
            capital: correctAnswer,
            selected: selectedAnswer,
            correct: isCorrect
        });
        questionsAnswered++;
    }
    
    // Show result
    showResult(isCorrect, selectedAnswer, correctAnswer);
    
    // Update button styles
    updateButtonStyles(selectedAnswer, correctAnswer);
    
    // Show appropriate button based on game mode
    if (gameMode === 'quiz' && questionsAnswered >= totalQuizQuestions) {
        showQuizResults();
    } else {
        nextBtn.style.display = 'inline-block';
    }
}

// Show result message
function showResult(isCorrect, selectedAnswer, correctAnswer) {
    resultSectionEl.style.display = 'block';
    
    if (isCorrect) {
        resultMessageEl.textContent = '✅ Correct! Well done!';
        resultMessageEl.className = 'result-message correct';
        correctAnswerEl.textContent = '';
    } else {
        resultMessageEl.textContent = '❌ Incorrect!';
        resultMessageEl.className = 'result-message incorrect';
        correctAnswerEl.textContent = `The correct answer is: ${correctAnswer}`;
    }
}

// Show quiz results
function showQuizResults() {
    const percentage = Math.round((score / totalQuizQuestions) * 100);
    const grade = getGrade(percentage);
    
    resultSectionEl.style.display = 'block';
    resultMessageEl.innerHTML = `
        <h2>🎉 Quiz Complete, ${playerName}!</h2>
        <p>You scored ${score} out of ${totalQuizQuestions} (${percentage}%)</p>
        <p class="grade">Grade: ${grade}</p>
    `;
    resultMessageEl.className = 'result-message correct';
    correctAnswerEl.innerHTML = generateResultsSummary();
    
    nextQuizBtn.style.display = 'inline-block';
    nextQuizBtn.textContent = 'Start New Quiz';
}

// Get grade based on percentage
function getGrade(percentage) {
    if (percentage >= 90) return 'A+ 🌟';
    if (percentage >= 80) return 'A 🎯';
    if (percentage >= 70) return 'B+ 👍';
    if (percentage >= 60) return 'B 😊';
    if (percentage >= 50) return 'C+ 📚';
    if (percentage >= 40) return 'C 🤔';
    return 'D 📖';
}

// Generate results summary
function generateResultsSummary() {
    let summary = '<h3>Your Answers:</h3><div class="results-list">';
    
    quizResults.forEach((result, index) => {
        const status = result.correct ? '✅' : '❌';
        summary += `
            <div class="result-item ${result.correct ? 'correct' : 'incorrect'}">
                <span class="result-number">${index + 1}.</span>
                <span class="result-country">${result.country}</span>
                <span class="result-capital">Capital: ${result.capital}</span>
                <span class="result-answer">Your answer: ${result.selected}</span>
                <span class="result-status">${status}</span>
            </div>
        `;
    });
    
    summary += '</div>';
    return summary;
}

// Update button styles based on selection
function updateButtonStyles(selectedAnswer, correctAnswer) {
    const buttons = optionsContainerEl.querySelectorAll('.option-btn');
    
    buttons.forEach(button => {
        const buttonText = button.textContent;
        
        if (buttonText === correctAnswer) {
            button.classList.add('correct');
        } else if (buttonText === selectedAnswer && selectedAnswer !== correctAnswer) {
            button.classList.add('incorrect');
        }
        
        // Disable all buttons
        button.disabled = true;
        button.style.cursor = 'not-allowed';
    });
}

// Update statistics display
function updateStats() {
    scoreEl.textContent = score;
    totalEl.textContent = totalQuestions;
}

// Reset the game
function resetGame() {
    score = 0;
    totalQuestions = 0;
    answered = false;
    questionsAnswered = 0;
    quizResults = [];
    gameMode = 'infinite';
    usedCountries = [];
    
    resultSectionEl.style.display = 'none';
    nextBtn.style.display = 'none';
    nextQuizBtn.style.display = 'none';
    
    updateStats();
    loadNewQuestion();
}

// Handle image loading errors
function handleImageError(img, fallbackUrl) {
    img.onerror = function() {
        this.src = fallbackUrl || 'https://via.placeholder.com/600x300/cccccc/666666?text=Capital+City';
    };
}

// Add error handlers for images
capitalImageEl.addEventListener('error', () => {
    capitalImageEl.src = 'https://via.placeholder.com/600x300/cccccc/666666?text=Capital+City';
});

countryFlagEl.addEventListener('error', () => {
    countryFlagEl.src = 'https://via.placeholder.com/120x80/cccccc/666666?text=Flag';
});

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame); 