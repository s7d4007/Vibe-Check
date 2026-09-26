// Quiz Data
const questions = [
    {
        question: "Your perfect weekend looks like...",
        options: [
            { text: "Cozying up with a good book or movie", scores: { social: 1, creative: 2, chill: 5, energy: 1, deep: 3 } },
            { text: "Hosting a dinner party with friends", scores: { social: 5, creative: 3, chill: 2, energy: 4, deep: 2 } },
            { text: "Starting a new creative project", scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { text: "Exploring a new city or hiking trail", scores: { social: 3, creative: 3, chill: 2, energy: 5, deep: 2 } }
        ]
    },
    {
        question: "When you're stressed, you usually...",
        options: [
            { text: "Seek comfort in close friends", scores: { social: 5, creative: 2, chill: 2, energy: 2, deep: 3 } },
            { text: "Need alone time to recharge", scores: { social: 1, creative: 3, chill: 4, energy: 1, deep: 5 } },
            { text: "Channel it into creative work", scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { text: "Exercise or stay active to clear your mind", scores: { social: 2, creative: 2, chill: 2, energy: 5, deep: 2 } }
        ]
    },
    {
        question: "Your music playlist is mostly...",
        options: [
            { text: "Chill lo-fi and acoustic vibes", scores: { social: 2, creative: 3, chill: 5, energy: 1, deep: 3 } },
            { text: "Upbeat party anthems and dance hits", scores: { social: 4, creative: 2, chill: 1, energy: 5, deep: 1 } },
            { text: "Eclectic mix of genres and artists", scores: { social: 3, creative: 5, chill: 3, energy: 3, deep: 2 } },
            { text: "Thoughtful lyrics and deep tracks", scores: { social: 2, creative: 3, chill: 3, energy: 2, deep: 5 } }
        ]
    },
    {
        question: "At a party, you're most likely...",
        options: [
            { text: "In the center of the action, meeting everyone", scores: { social: 5, creative: 3, chill: 1, energy: 5, deep: 1 } },
            { text: "Having deep conversations in a quiet corner", scores: { social: 3, creative: 2, chill: 3, energy: 2, deep: 5 } },
            { text: "Observing and enjoying the atmosphere", scores: { social: 2, creative: 3, chill: 4, energy: 2, deep: 4 } },
            { text: "Curating the playlist or helping host", scores: { social: 3, creative: 5, chill: 2, energy: 3, deep: 2 } }
        ]
    },
    {
        question: "Your ideal workspace is...",
        options: [
            { text: "A bustling coffee shop with background noise", scores: { social: 4, creative: 3, chill: 2, energy: 3, deep: 2 } },
            { text: "A quiet, minimalist room at home", scores: { social: 1, creative: 3, chill: 5, energy: 1, deep: 4 } },
            { text: "A colorful studio with inspiring visuals", scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 2 } },
            { text: "Anywhere with good WiFi and flexibility", scores: { social: 3, creative: 3, chill: 3, energy: 4, deep: 2 } }
        ]
    },
    {
        question: "When making decisions, you tend to...",
        options: [
            { text: "Go with your gut instinct quickly", scores: { social: 3, creative: 4, chill: 3, energy: 4, deep: 1 } },
            { text: "Research thoroughly and analyze options", scores: { social: 2, creative: 2, chill: 3, energy: 2, deep: 5 } },
            { text: "Consult friends and get their input", scores: { social: 5, creative: 2, chill: 2, energy: 3, deep: 2 } },
            { text: "Take your time and reflect deeply", scores: { social: 1, creative: 3, chill: 4, energy: 1, deep: 5 } }
        ]
    },
    {
        question: "Your friends would describe you as...",
        options: [
            { text: "The life of the party", scores: { social: 5, creative: 3, chill: 1, energy: 5, deep: 1 } },
            { text: "The thoughtful listener", scores: { social: 3, creative: 2, chill: 4, energy: 2, deep: 5 } },
            { text: "The creative one with unique ideas", scores: { social: 3, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { text: "The chill, go-with-the-flow friend", scores: { social: 3, creative: 2, chill: 5, energy: 2, deep: 3 } }
        ]
    },
    {
        question: "The emoji that best represents you is...",
        options: [
            { text: "🎉 (Party time!)", scores: { social: 5, creative: 2, chill: 1, energy: 5, deep: 1 } },
            { text: "🤔 (Deep in thought)", scores: { social: 2, creative: 3, chill: 3, energy: 1, deep: 5 } },
            { text: "🎨 (Creative spirit)", scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { text: "😌 (Peaceful vibes)", scores: { social: 2, creative: 2, chill: 5, energy: 1, deep: 4 } }
        ]
    },
    {
        question: "Your dream vacation involves...",
        options: [
            { text: "Exploring vibrant cities and nightlife", scores: { social: 5, creative: 3, chill: 1, energy: 5, deep: 2 } },
            { text: "A peaceful retreat in nature", scores: { social: 1, creative: 3, chill: 5, energy: 2, deep: 4 } },
            { text: "Immersing in art and culture", scores: { social: 3, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { text: "Spontaneous adventure and new experiences", scores: { social: 4, creative: 4, chill: 2, energy: 5, deep: 2 } }
        ]
    },
    {
        question: "When meeting new people, you...",
        options: [
            { text: "Easily start conversations and make friends", scores: { social: 5, creative: 3, chill: 2, energy: 4, deep: 1 } },
            { text: "Are friendly but prefer deeper connections", scores: { social: 3, creative: 2, chill: 3, energy: 2, deep: 5 } },
            { text: "Observe first, then engage selectively", scores: { social: 2, creative: 3, chill: 4, energy: 2, deep: 4 } },
            { text: "Share your creative projects to break the ice", scores: { social: 3, creative: 5, chill: 2, energy: 3, deep: 2 } }
        ]
    },
    {
        question: "Your go-to comfort activity is...",
        options: [
            { text: "Calling a friend to chat", scores: { social: 5, creative: 2, chill: 2, energy: 2, deep: 2 } },
            { text: "Reading or journaling", scores: { social: 1, creative: 3, chill: 5, energy: 1, deep: 5 } },
            { text: "Making something creative", scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { text: "Exercise or physical activity", scores: { social: 2, creative: 2, chill: 2, energy: 5, deep: 2 } }
        ]
    },
    {
        question: "Your biggest energy boost comes from...",
        options: [
            { text: "Social interactions and being around people", scores: { social: 5, creative: 2, chill: 1, energy: 4, deep: 1 } },
            { text: "Quiet reflection and alone time", scores: { social: 1, creative: 3, chill: 4, energy: 1, deep: 5 } },
            { text: "Creative expression and new ideas", scores: { social: 2, creative: 5, chill: 2, energy: 4, deep: 3 } },
            { text: "Physical movement and adventure", scores: { social: 3, creative: 2, chill: 2, energy: 5, deep: 2 } }
        ]
    }
];

// Vibe Categories
const vibeCategories = [
    {
        name: "Chill Vibes",
        emoji: "😌",
        description: "You radiate peaceful energy and find joy in life's quiet moments. Your calm presence is a gift to those around you, and you know how to go with the flow while staying true to yourself.",
        dominant: "chill"
    },
    {
        name: "Party Energy",
        emoji: "🎉",
        description: "You're the spark that lights up every room! Your enthusiasm is contagious, and you thrive on bringing people together. Life is a celebration, and you're always ready to dance.",
        dominant: "social"
    },
    {
        name: "Deep Thinker",
        emoji: "🤔",
        description: "Your mind is a beautiful landscape of thoughts and ideas. You see the world in layers others miss, and your introspective nature leads to profound insights and meaningful connections.",
        dominant: "deep"
    },
    {
        name: "Creative Spark",
        emoji: "🎨",
        description: "Creativity flows through everything you do. You see possibilities where others see obstacles, and your unique perspective brings color and innovation to the world around you.",
        dominant: "creative"
    },
    {
        name: "Social Butterfly",
        emoji: "🦋",
        description: "You thrive on connection and have a gift for making everyone feel included. Your warmth and genuine interest in others creates lasting friendships wherever you go.",
        dominant: "social"
    },
    {
        name: "Balanced Beam",
        emoji: "⚖️",
        description: "You've found harmony between different aspects of life. Your balanced approach lets you adapt to any situation while staying grounded in your values and authentic self.",
        dominant: "balanced"
    }
];

// State Management
let currentQuestion = 0;
let answers = [];
let totalScores = {
    social: 0,
    creative: 0,
    chill: 0,
    energy: 0,
    deep: 0
};
let userName = '';
let userAge = 25;

// DOM Elements
const welcomeContainer = document.getElementById('welcomeContainer');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const progressContainer = document.getElementById('progressContainer');
const nameInput = document.getElementById('nameInput');
const ageSlider = document.getElementById('ageSlider');
const ageValue = document.getElementById('ageValue');
const startBtn = document.getElementById('startBtn');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const vibeIndex = document.getElementById('vibeIndex');
const vibeCategory = document.getElementById('vibeCategory');
const vibeDescription = document.getElementById('vibeDescription');
const breakdownChart = document.getElementById('breakdownChart');
const resultScore = document.getElementById('resultScore');
const resultCategory = document.getElementById('resultCategory');
const shareBtn = document.getElementById('shareBtn');
const retakeBtn = document.getElementById('retakeBtn');
const toast = document.getElementById('toast');

// Initialize Welcome Screen
function initWelcome() {
    // Reset state
    userName = '';
    userAge = 25;
    nameInput.value = '';
    ageSlider.value = 25;
    ageValue.textContent = '25';
    startBtn.disabled = true;
    
    // Show welcome screen
    welcomeContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    progressContainer.classList.add('hidden');
}

// Initialize Quiz
function initQuiz() {
    currentQuestion = 0;
    answers = [];
    totalScores = {
        social: 0,
        creative: 0,
        chill: 0,
        energy: 0,
        deep: 0
    };
    
    // Hide welcome, show quiz
    welcomeContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    progressContainer.classList.remove('hidden');
    
    showQuestion();
}

// Show Current Question
function showQuestion() {
    const question = questions[currentQuestion];
    
    // Animate question change
    const questionCard = document.getElementById('questionCard');
    questionCard.style.animation = 'none';
    questionCard.offsetHeight; // Trigger reflow
    questionCard.style.animation = 'fadeIn 0.5s ease-out';
    
    questionText.textContent = question.question;
    
    // Clear and render options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.dataset.index = index;
        
        // Check if this option was previously selected
        if (answers[currentQuestion] === index) {
            button.classList.add('selected');
        }
        
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
    
    // Update progress
    updateProgress();
    
    // Update navigation buttons
    backBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = answers[currentQuestion] === undefined;
}

// Select Option
function selectOption(index) {
    answers[currentQuestion] = index;
    
    // Update button states
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });
    
    // Enable next button
    nextBtn.disabled = false;
}

// Update Progress
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

// Navigate Questions
function navigate(direction) {
    if (direction === 'next' && currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else if (direction === 'back' && currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    } else if (direction === 'next' && currentQuestion === questions.length - 1) {
        calculateResults();
    }
}

// Calculate Results
function calculateResults() {
    // Reset scores
    totalScores = {
        social: 0,
        creative: 0,
        chill: 0,
        energy: 0,
        deep: 0
    };
    
    // Sum up scores from all answers
    answers.forEach((answerIndex, questionIndex) => {
        const selectedOption = questions[questionIndex].options[answerIndex];
        Object.keys(selectedOption.scores).forEach(dimension => {
            totalScores[dimension] += selectedOption.scores[dimension];
        });
    });
    
    // Calculate vibe index (0-100)
    const maxPossibleScore = questions.length * 5;
    const vibeIndexValue = Math.round(
        ((totalScores.social + totalScores.creative + totalScores.chill + 
          totalScores.energy + totalScores.deep) / (maxPossibleScore * 5)) * 100
    );
    
    // Determine dominant dimension
    const maxScore = Math.max(...Object.values(totalScores));
    const dominantDimension = Object.keys(totalScores).find(
        key => totalScores[key] === maxScore
    );
    
    // Find matching category
    const category = vibeCategories.find(cat => cat.dominant === dominantDimension) || 
                     vibeCategories[vibeCategories.length - 1]; // Default to balanced
    
    // Display results
    displayResults(vibeIndexValue, category);
}

// Display Results
function displayResults(vibeIndexValue, category) {
    // Hide quiz, show results
    quizContainer.classList.add('hidden');
    progressContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    // Personalize with user's name
    const greeting = userName ? `Hey ${userName}!` : 'Hey there!';
    const resultsTitle = document.getElementById('resultsTitle');
    resultsTitle.textContent = `${greeting} Your Vibe`;
    
    // Animate vibe index
    animateValue(vibeIndex, 0, vibeIndexValue, 1500);
    
    // Set category and description
    vibeCategory.textContent = `${category.emoji} ${category.name}`;
    vibeDescription.textContent = category.description;
    
    // Render breakdown chart
    renderBreakdownChart();
    
    // Set result card
    resultScore.textContent = vibeIndexValue;
    resultCategory.textContent = category.name;
}

// Animate Value
function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(start + (end - start) * easeOutQuart);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Render Breakdown Chart
function renderBreakdownChart() {
    const dimensions = [
        { key: 'social', label: 'Social', color: '#667eea' },
        { key: 'creative', label: 'Creative', color: '#f093fb' },
        { key: 'chill', label: 'Chill', color: '#4facfe' },
        { key: 'energy', label: 'Energy', color: '#f5576c' },
        { key: 'deep', label: 'Deep', color: '#764ba2' }
    ];
    
    const maxScore = questions.length * 5;
    
    breakdownChart.innerHTML = dimensions.map(dim => {
        const score = totalScores[dim.key];
        const percentage = Math.round((score / maxScore) * 100);
        
        return `
            <div class="breakdown-item">
                <span class="breakdown-label">${dim.label}</span>
                <div class="breakdown-bar">
                    <div class="breakdown-fill" style="width: 0%; background: ${dim.color}"></div>
                </div>
                <span class="breakdown-value">${percentage}%</span>
            </div>
        `;
    }).join('');
    
    // Animate bars
    setTimeout(() => {
        const fills = breakdownChart.querySelectorAll('.breakdown-fill');
        fills.forEach((fill, index) => {
            const percentage = Math.round((totalScores[dimensions[index].key] / maxScore) * 100);
            fill.style.width = `${percentage}%`;
        });
    }, 100);
}

// Share Result
function shareResult() {
    const vibeIndexValue = vibeIndex.textContent;
    const categoryName = vibeCategory.textContent;
    
    let shareText = `✨ `;
    if (userName) {
        shareText += `${userName}'s `;
    }
    shareText += `Vibe Check Result: ${vibeIndexValue}/100 - ${categoryName}\n\nFind your vibe at vibecheck.app`;
    
    navigator.clipboard.writeText(shareText).then(() => {
        showToast();
    }).catch(err => {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast();
    });
}

// Show Toast
function showToast() {
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2500);
}

// Retake Quiz
function retakeQuiz() {
    resultsContainer.classList.add('hidden');
    // Reset results title
    const resultsTitle = document.getElementById('resultsTitle');
    resultsTitle.textContent = 'Your Vibe';
    initWelcome();
}

// Welcome Screen Event Listeners
nameInput.addEventListener('input', (e) => {
    userName = e.target.value.trim();
    validateWelcomeForm();
});

ageSlider.addEventListener('input', (e) => {
    userAge = parseInt(e.target.value);
    ageValue.textContent = userAge;
    validateWelcomeForm();
});

startBtn.addEventListener('click', () => {
    if (userName && userAge) {
        initQuiz();
    }
});

// Validate Welcome Form
function validateWelcomeForm() {
    const isValid = userName.length > 0 && userAge >= 13;
    startBtn.disabled = !isValid;
}

// Event Listeners
backBtn.addEventListener('click', () => navigate('back'));
nextBtn.addEventListener('click', () => navigate('next'));
shareBtn.addEventListener('click', shareResult);
retakeBtn.addEventListener('click', retakeQuiz);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && !nextBtn.disabled) {
        navigate('next');
    } else if (e.key === 'ArrowLeft' && !backBtn.disabled) {
        navigate('back');
    }
});

// Initialize on load
initWelcome();