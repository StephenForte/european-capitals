// European countries data with flags, populations, capitals, and country outlines
const europeanCountries = [
    {
        name: "Germany",
        flag: "https://flagcdn.com/w320/de.png",
        population: "83,240,000",
        capital: "Berlin",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/de/outline/512.png"
    },
    {
        name: "France",
        flag: "https://flagcdn.com/w320/fr.png",
        population: "67,390,000",
        capital: "Paris",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/fr/outline/512.png"
    },
    {
        name: "Italy",
        flag: "https://flagcdn.com/w320/it.png",
        population: "60,360,000",
        capital: "Rome",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/it/outline/512.png"
    },
    {
        name: "Spain",
        flag: "https://flagcdn.com/w320/es.png",
        population: "47,350,000",
        capital: "Madrid",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/es/outline/512.png"
    },
    {
        name: "Poland",
        flag: "https://flagcdn.com/w320/pl.png",
        population: "37,950,000",
        capital: "Warsaw",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/pl/outline/512.png"
    },
    {
        name: "Netherlands",
        flag: "https://flagcdn.com/w320/nl.png",
        population: "17,180,000",
        capital: "Amsterdam",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/nl/outline/512.png"
    },
    {
        name: "Belgium",
        flag: "https://flagcdn.com/w320/be.png",
        population: "11,590,000",
        capital: "Brussels",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/be/outline/512.png"
    },
    {
        name: "Sweden",
        flag: "https://flagcdn.com/w320/se.png",
        population: "10,350,000",
        capital: "Stockholm",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/se/outline/512.png"
    },
    {
        name: "Austria",
        flag: "https://flagcdn.com/w320/at.png",
        population: "9,040,000",
        capital: "Vienna",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/at/outline/512.png"
    },
    {
        name: "Switzerland",
        flag: "https://flagcdn.com/w320/ch.png",
        population: "8,700,000",
        capital: "Bern",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/ch/outline/512.png"
    },
    {
        name: "Denmark",
        flag: "https://flagcdn.com/w320/dk.png",
        population: "5,830,000",
        capital: "Copenhagen",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/dk/outline/512.png"
    },
    {
        name: "Norway",
        flag: "https://flagcdn.com/w320/no.png",
        population: "5,420,000",
        capital: "Oslo",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/no/outline/512.png"
    },
    {
        name: "Finland",
        flag: "https://flagcdn.com/w320/fi.png",
        population: "5,540,000",
        capital: "Helsinki",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/fi/outline/512.png"
    },
    {
        name: "Portugal",
        flag: "https://flagcdn.com/w320/pt.png",
        population: "10,300,000",
        capital: "Lisbon",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/pt/outline/512.png"
    },
    {
        name: "Greece",
        flag: "https://flagcdn.com/w320/gr.png",
        population: "10,720,000",
        capital: "Athens",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/gr/outline/512.png"
    },
    {
        name: "Czech Republic",
        flag: "https://flagcdn.com/w320/cz.png",
        population: "10,700,000",
        capital: "Prague",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/cz/outline/512.png"
    },
    {
        name: "Hungary",
        flag: "https://flagcdn.com/w320/hu.png",
        population: "9,700,000",
        capital: "Budapest",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/hu/outline/512.png"
    },
    {
        name: "Ireland",
        flag: "https://flagcdn.com/w320/ie.png",
        population: "4,990,000",
        capital: "Dublin",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/ie/outline/512.png"
    },
    {
        name: "Croatia",
        flag: "https://flagcdn.com/w320/hr.png",
        population: "4,050,000",
        capital: "Zagreb",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/hr/outline/512.png"
    },
    {
        name: "Slovakia",
        flag: "https://flagcdn.com/w320/sk.png",
        population: "5,460,000",
        capital: "Bratislava",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/sk/outline/512.png"
    },
    {
        name: "United Kingdom",
        flag: "https://flagcdn.com/w320/gb.png",
        population: "67,220,000",
        capital: "London",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/gb/outline/512.png"
    },
    {
        name: "Bulgaria",
        flag: "https://flagcdn.com/w320/bg.png",
        population: "6,875,000",
        capital: "Sofia",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/bg/outline/512.png"
    },
    {
        name: "Romania",
        flag: "https://flagcdn.com/w320/ro.png",
        population: "19,290,000",
        capital: "Bucharest",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/ro/outline/512.png"
    },
    {
        name: "Iceland",
        flag: "https://flagcdn.com/w320/is.png",
        population: "372,000",
        capital: "Reykjavik",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/is/outline/512.png"
    },
    {
        name: "Estonia",
        flag: "https://flagcdn.com/w320/ee.png",
        population: "1,330,000",
        capital: "Tallinn",
        countryOutline: "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/ee/outline/512.png"
    }
];

// --- UI Logic for Quiz Start ---

document.addEventListener('DOMContentLoaded', function() {
    // Get references to UI elements
    const startPage = document.getElementById('start-page');
    const gamePage = document.getElementById('game-page');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const playerNameInput = document.getElementById('player-name');
    const playerDisplayName = document.getElementById('player-display-name');
    const scoreElem = document.getElementById('score');
    const totalElem = document.getElementById('total');

    // Function to start the quiz
    function startQuiz() {
        const playerName = playerNameInput.value.trim() || 'Player';
        playerDisplayName.textContent = playerName;
        scoreElem.textContent = '0';
        totalElem.textContent = '0';
        startPage.style.display = 'none';
        gamePage.style.display = 'block';
        quizState.score = 0;
        quizState.current = 0;
        quizState.questions = getRandomQuestions(10);
        quizState.answers = [];
        if (countryInfo) countryInfo.style.display = '';
        // Restore quiz question
        const quizSection = document.querySelector('.quiz-section h3');
        if (quizSection) quizSection.textContent = 'What is the capital of this country?';
        loadQuestion();
    }

    // --- Quiz Logic ---
    const countryFlag = document.getElementById('country-flag');
    const countryName = document.getElementById('country-name');
    const countryPopulation = document.getElementById('country-population');
    const optionsContainer = document.getElementById('options-container');
    const resultSection = document.getElementById('result-section');
    const resultMessage = document.getElementById('result-message');
    const correctAnswerElem = document.getElementById('correct-answer');
    const nextBtn = document.getElementById('next-btn');
    const nextQuizBtn = document.getElementById('next-quiz-btn');
    const backToStartBtn = document.getElementById('back-to-start-btn');
    const countryInfo = document.querySelector('.country-info');

    const quizState = {
        score: 0,
        current: 0,
        questions: [],
        answers: [] // {country, userAnswer, correctAnswer, isCorrect}
    };

    function getRandomQuestions(n) {
        // Shuffle and pick n countries
        const shuffled = europeanCountries.slice().sort(() => Math.random() - 0.5);
        return shuffled.slice(0, n);
    }

    function getOptions(correctCapital) {
        // Get 3 random wrong capitals
        const capitals = europeanCountries.map(c => c.capital).filter(c => c !== correctCapital);
        const wrong = capitals.sort(() => Math.random() - 0.5).slice(0, 3);
        const options = wrong.concat(correctCapital).sort(() => Math.random() - 0.5);
        return options;
    }

    function loadQuestion() {
        resultSection.style.display = 'none';
        nextBtn.style.display = '';
        nextQuizBtn.style.display = 'none';
        optionsContainer.innerHTML = '';
        if (quizState.current >= quizState.questions.length) {
            // Quiz finished
            countryFlag.src = '';
            countryName.textContent = '';
            countryPopulation.textContent = '';
            optionsContainer.innerHTML = '';
            // Hide the country info container
            if (countryInfo) countryInfo.style.display = 'none';
            // Clear the quiz section question
            const quizSection = document.querySelector('.quiz-section h3');
            if (quizSection) quizSection.textContent = '';
            resultSection.style.display = 'block';
            resultMessage.innerHTML = `<span class="trophy-anim" style="font-size:2.5rem;display:inline-block;vertical-align:middle;">🏆</span><br>Final Score: <b>${quizState.score}</b> / <b>${quizState.questions.length}</b>`;
            correctAnswerElem.textContent = '';
            nextBtn.style.display = 'none';
            nextQuizBtn.style.display = '';
            scoreElem.textContent = quizState.score;
            totalElem.textContent = quizState.questions.length;
            renderQuizSummary();
            animateTrophy();
            return;
        }
        const country = quizState.questions[quizState.current];
        countryFlag.src = country.flag;
        countryName.textContent = country.name;
        countryPopulation.textContent = country.population;
        scoreElem.textContent = quizState.score;
        totalElem.textContent = quizState.current + 1;
        const options = getOptions(country.capital);
        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-option';
            btn.textContent = option;
            btn.onclick = () => selectOption(option, country.capital);
            optionsContainer.appendChild(btn);
        });
    }

    function selectOption(selected, correct) {
        resultSection.style.display = 'block';
        const country = quizState.questions[quizState.current];
        const isCorrect = selected === correct;
        quizState.answers.push({
            country: country,
            userAnswer: selected,
            correctAnswer: correct,
            isCorrect: isCorrect
        });
        if (isCorrect) {
            resultMessage.textContent = '✅ Correct!';
            quizState.score++;
        } else {
            resultMessage.textContent = '❌ Incorrect!';
        }
        correctAnswerElem.textContent = `Correct answer: ${correct}`;
        // Disable all option buttons
        Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
    }

    // Render quiz summary at the end
    function renderQuizSummary() {
        // Remove any previous summary
        let summary = document.getElementById('quiz-summary');
        if (summary) summary.remove();
        summary = document.createElement('div');
        summary.id = 'quiz-summary';
        summary.style.marginTop = '30px';
        summary.innerHTML = `<h3 style="text-align:center;">Quiz Summary</h3>`;
        quizState.answers.forEach((ans, idx) => {
            summary.innerHTML += `
                <div class="result-item-flex ${ans.isCorrect ? 'correct' : 'incorrect'}">
                    <div class="result-flag"><img src="${ans.country.flag}" alt="flag"></div>
                    <div class="result-number">${idx + 1}.</div>
                    <div class="result-country">${ans.country.name}</div>
                    <div class="result-capital">Capital: <b>${ans.correctAnswer}</b></div>
                    <div class="result-answer" style="${ans.isCorrect ? 'color:#22543d;' : 'color:#742a2a;'}">
                        Your answer: <b>${ans.userAnswer}</b> ${ans.isCorrect ? '✅' : '❌'}
                    </div>
                </div>
            `;
        });
        resultSection.appendChild(summary);
    }

    // Trophy animation
    function animateTrophy() {
        const trophy = document.querySelector('.trophy-anim');
        if (trophy) {
            trophy.animate([
                { transform: 'scale(0.5) translateY(-30px)', opacity: 0 },
                { transform: 'scale(1.2) translateY(10px)', opacity: 1 },
                { transform: 'scale(1) translateY(0)', opacity: 1 }
            ], {
                duration: 900,
                easing: 'cubic-bezier(.68,-0.55,.27,1.55)',
                fill: 'forwards'
            });
        }
    }

    nextBtn.addEventListener('click', function() {
        quizState.current++;
        loadQuestion();
    });

    nextQuizBtn.addEventListener('click', function() {
        startQuiz();
    });

    backToStartBtn.addEventListener('click', function() {
        gamePage.style.display = 'none';
        startPage.style.display = 'block';
    });

    // Event listener for Start Quiz button
    startQuizBtn.addEventListener('click', startQuiz);

    // Optionally, allow pressing Enter in the name input to start
    playerNameInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            startQuiz();
        }
    });
});