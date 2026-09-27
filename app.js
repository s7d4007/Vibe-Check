// ─── QUIZ DATA ───────────────────────────────────────────────────────────────
// Each option has: emoji, text, scores { social, creative, chill, energy, deep }
// Scores range 1-5. Wider spread across questions ensures the final index
// actually spans the full 0-100 range.

const questions = [
    {
        question: "Your perfect weekend looks like…",
        options: [
            { emoji: "📚", text: "Books & movies at home",   scores: { social: 1, creative: 2, chill: 5, energy: 1, deep: 4 } },
            { emoji: "🥳", text: "Hosting a dinner party",   scores: { social: 5, creative: 3, chill: 1, energy: 4, deep: 2 } },
            { emoji: "🎨", text: "Starting a new project",   scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { emoji: "🧗", text: "Outdoor adventure",        scores: { social: 3, creative: 2, chill: 1, energy: 5, deep: 2 } }
        ]
    },
    {
        question: "When you're stressed, you…",
        options: [
            { emoji: "📞", text: "Call a close friend",      scores: { social: 5, creative: 1, chill: 2, energy: 2, deep: 2 } },
            { emoji: "🧘", text: "Need alone time",          scores: { social: 1, creative: 2, chill: 5, energy: 1, deep: 5 } },
            { emoji: "🎭", text: "Channel it creatively",    scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { emoji: "🏃", text: "Hit the gym / run",        scores: { social: 1, creative: 1, chill: 2, energy: 5, deep: 2 } }
        ]
    },
    {
        question: "Your music playlist is mostly…",
        options: [
            { emoji: "🎵", text: "Lo-fi / acoustic chill",   scores: { social: 1, creative: 3, chill: 5, energy: 1, deep: 4 } },
            { emoji: "🎉", text: "Upbeat party anthems",     scores: { social: 4, creative: 2, chill: 1, energy: 5, deep: 1 } },
            { emoji: "🌀", text: "Eclectic mix of genres",   scores: { social: 3, creative: 5, chill: 3, energy: 3, deep: 2 } },
            { emoji: "📖", text: "Deep, lyric-driven tracks", scores: { social: 2, creative: 3, chill: 3, energy: 2, deep: 5 } }
        ]
    },
    {
        question: "At a party, you're the one…",
        options: [
            { emoji: "🦁", text: "Working the whole room",   scores: { social: 5, creative: 2, chill: 1, energy: 5, deep: 1 } },
            { emoji: "🌊", text: "Having one deep convo",    scores: { social: 3, creative: 2, chill: 3, energy: 2, deep: 5 } },
            { emoji: "👁", text: "Observing from the sidelines", scores: { social: 1, creative: 3, chill: 5, energy: 1, deep: 4 } },
            { emoji: "🎧", text: "Curating the playlist",    scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 2 } }
        ]
    },
    {
        question: "Your ideal workspace is…",
        options: [
            { emoji: "☕", text: "Buzzy coffee shop",        scores: { social: 4, creative: 3, chill: 2, energy: 3, deep: 2 } },
            { emoji: "🏡", text: "Silent room at home",      scores: { social: 1, creative: 2, chill: 5, energy: 1, deep: 5 } },
            { emoji: "🎨", text: "Colorful creative studio", scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 2 } },
            { emoji: "🌍", text: "Anywhere with WiFi",       scores: { social: 3, creative: 3, chill: 3, energy: 4, deep: 1 } }
        ]
    },
    {
        question: "When making a big decision, you…",
        options: [
            { emoji: "⚡", text: "Trust your gut instantly", scores: { social: 2, creative: 4, chill: 2, energy: 5, deep: 1 } },
            { emoji: "🔬", text: "Research every angle",     scores: { social: 1, creative: 2, chill: 3, energy: 2, deep: 5 } },
            { emoji: "👥", text: "Ask friends for input",    scores: { social: 5, creative: 2, chill: 2, energy: 3, deep: 2 } },
            { emoji: "🌙", text: "Sleep on it for days",     scores: { social: 1, creative: 3, chill: 5, energy: 1, deep: 5 } }
        ]
    },
    {
        question: "Friends describe you as…",
        options: [
            { emoji: "🎆", text: "Life of the party",        scores: { social: 5, creative: 2, chill: 1, energy: 5, deep: 1 } },
            { emoji: "🫶", text: "The thoughtful listener",  scores: { social: 3, creative: 2, chill: 4, energy: 1, deep: 5 } },
            { emoji: "💡", text: "The creative one",         scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { emoji: "🌊", text: "Chill, go-with-the-flow",  scores: { social: 2, creative: 2, chill: 5, energy: 2, deep: 3 } }
        ]
    },
    {
        question: "Pick the emoji that's your spirit animal:",
        options: [
            { emoji: "🎉", text: "Party time always",        scores: { social: 5, creative: 2, chill: 1, energy: 5, deep: 1 } },
            { emoji: "🤔", text: "Forever deep in thought",  scores: { social: 1, creative: 3, chill: 3, energy: 1, deep: 5 } },
            { emoji: "🎨", text: "Born creative",            scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { emoji: "😌", text: "Peaceful vibes only",      scores: { social: 2, creative: 2, chill: 5, energy: 1, deep: 4 } }
        ]
    },
    {
        question: "Your dream vacation is…",
        options: [
            { emoji: "🏙️", text: "Vibrant city & nightlife", scores: { social: 5, creative: 3, chill: 1, energy: 5, deep: 1 } },
            { emoji: "🌲", text: "Peaceful nature retreat",  scores: { social: 1, creative: 2, chill: 5, energy: 2, deep: 5 } },
            { emoji: "🏛️", text: "Art & culture immersion",  scores: { social: 3, creative: 5, chill: 2, energy: 2, deep: 4 } },
            { emoji: "🪂", text: "Spontaneous adventure",    scores: { social: 3, creative: 3, chill: 1, energy: 5, deep: 2 } }
        ]
    },
    {
        question: "When you meet new people, you…",
        options: [
            { emoji: "🤝", text: "Start convo immediately",  scores: { social: 5, creative: 2, chill: 2, energy: 4, deep: 1 } },
            { emoji: "💬", text: "Prefer deeper 1-on-1",     scores: { social: 3, creative: 2, chill: 3, energy: 2, deep: 5 } },
            { emoji: "👀", text: "Observe first, then open", scores: { social: 2, creative: 2, chill: 5, energy: 1, deep: 4 } },
            { emoji: "🖼️", text: "Share your work / ideas",  scores: { social: 3, creative: 5, chill: 2, energy: 3, deep: 2 } }
        ]
    },
    {
        question: "Your comfort activity after a rough day is…",
        options: [
            { emoji: "📞", text: "Call someone you love",    scores: { social: 5, creative: 1, chill: 2, energy: 1, deep: 2 } },
            { emoji: "📓", text: "Read or journal",          scores: { social: 1, creative: 3, chill: 5, energy: 1, deep: 5 } },
            { emoji: "🎸", text: "Make / create something",  scores: { social: 1, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { emoji: "🏋️", text: "Work out hard",            scores: { social: 1, creative: 1, chill: 1, energy: 5, deep: 2 } }
        ]
    },
    {
        question: "Your energy peaks…",
        options: [
            { emoji: "🌅", text: "Early morning, sharp mind", scores: { social: 2, creative: 4, chill: 3, energy: 4, deep: 4 } },
            { emoji: "☀️", text: "Afternoon grind mode",    scores: { social: 3, creative: 3, chill: 2, energy: 5, deep: 2 } },
            { emoji: "🌆", text: "Evening, social hours",    scores: { social: 5, creative: 3, chill: 2, energy: 4, deep: 2 } },
            { emoji: "🌙", text: "Late night, deep focus",   scores: { social: 1, creative: 4, chill: 3, energy: 2, deep: 5 } }
        ]
    },
    {
        question: "How do you consume content?",
        options: [
            { emoji: "🎥", text: "Short-form videos all day", scores: { social: 3, creative: 3, chill: 3, energy: 4, deep: 1 } },
            { emoji: "🎙️", text: "Long podcasts & essays",   scores: { social: 2, creative: 3, chill: 3, energy: 1, deep: 5 } },
            { emoji: "📸", text: "Aesthetic photo feeds",    scores: { social: 3, creative: 5, chill: 3, energy: 2, deep: 2 } },
            { emoji: "👥", text: "Group chats & forums",     scores: { social: 5, creative: 2, chill: 2, energy: 3, deep: 2 } }
        ]
    },
    {
        question: "In a group project, you naturally become…",
        options: [
            { emoji: "📣", text: "The hype person & leader",  scores: { social: 5, creative: 3, chill: 1, energy: 5, deep: 1 } },
            { emoji: "🧠", text: "The strategist & analyst",  scores: { social: 2, creative: 3, chill: 3, energy: 2, deep: 5 } },
            { emoji: "✏️", text: "The ideas & design person", scores: { social: 2, creative: 5, chill: 2, energy: 3, deep: 3 } },
            { emoji: "🕊️", text: "The peacekeeper & glue",   scores: { social: 4, creative: 2, chill: 5, energy: 2, deep: 3 } }
        ]
    },
    {
        question: "Your relationship with your phone is…",
        options: [
            { emoji: "📱", text: "Always reachable, love it",  scores: { social: 5, creative: 2, chill: 2, energy: 4, deep: 1 } },
            { emoji: "🔕", text: "DND on, checking on my schedule", scores: { social: 1, creative: 3, chill: 5, energy: 2, deep: 4 } },
            { emoji: "📷", text: "Camera & creative tools",   scores: { social: 3, creative: 5, chill: 2, energy: 3, deep: 2 } },
            { emoji: "⏳", text: "Constant love-hate battle", scores: { social: 3, creative: 2, chill: 3, energy: 3, deep: 3 } }
        ]
    },
    {
        question: "Your ideal Friday night is…",
        options: [
            { emoji: "🪩", text: "Out dancing until 3am",     scores: { social: 5, creative: 3, chill: 1, energy: 5, deep: 1 } },
            { emoji: "🍕", text: "Small dinner with close friends", scores: { social: 4, creative: 2, chill: 4, energy: 2, deep: 3 } },
            { emoji: "🎮", text: "Gaming or creating solo",   scores: { social: 1, creative: 4, chill: 3, energy: 3, deep: 3 } },
            { emoji: "🛋️", text: "Couch, series, total offline", scores: { social: 1, creative: 2, chill: 5, energy: 1, deep: 3 } }
        ]
    },
    {
        question: "Pick the superpower you'd actually use:",
        options: [
            { emoji: "🧲", text: "Telepathy — read minds",    scores: { social: 3, creative: 3, chill: 2, energy: 1, deep: 5 } },
            { emoji: "⚡", text: "Telekinesis — move things", scores: { social: 2, creative: 5, chill: 2, energy: 4, deep: 2 } },
            { emoji: "🌀", text: "Time travel",               scores: { social: 2, creative: 4, chill: 3, energy: 3, deep: 5 } },
            { emoji: "🔮", text: "Invisibility",              scores: { social: 1, creative: 3, chill: 5, energy: 2, deep: 4 } }
        ]
    },
    {
        question: "You'd describe your vibe in one word as…",
        options: [
            { emoji: "🔥", text: "Intense",                   scores: { social: 3, creative: 4, chill: 1, energy: 5, deep: 4 } },
            { emoji: "🌸", text: "Gentle",                    scores: { social: 3, creative: 3, chill: 5, energy: 1, deep: 4 } },
            { emoji: "⚡", text: "Electric",                  scores: { social: 5, creative: 3, chill: 1, energy: 5, deep: 2 } },
            { emoji: "🌊", text: "Fluid",                     scores: { social: 2, creative: 5, chill: 4, energy: 2, deep: 4 } }
        ]
    },
    {
        question: "When you're bored, you…",
        options: [
            { emoji: "📲", text: "Text everyone to hang",     scores: { social: 5, creative: 1, chill: 2, energy: 3, deep: 1 } },
            { emoji: "🖊️", text: "Start writing or sketching", scores: { social: 1, creative: 5, chill: 3, energy: 2, deep: 4 } },
            { emoji: "🛁", text: "Do nothing — enjoy it",     scores: { social: 1, creative: 2, chill: 5, energy: 1, deep: 3 } },
            { emoji: "🏄", text: "Go do something physical",  scores: { social: 2, creative: 1, chill: 1, energy: 5, deep: 1 } }
        ]
    },
    {
        question: "Your love language is most likely…",
        options: [
            { emoji: "🗣️", text: "Words of affirmation",      scores: { social: 4, creative: 3, chill: 3, energy: 2, deep: 5 } },
            { emoji: "🎁", text: "Thoughtful gifts",          scores: { social: 3, creative: 5, chill: 3, energy: 2, deep: 3 } },
            { emoji: "⏰", text: "Quality time together",     scores: { social: 5, creative: 2, chill: 4, energy: 2, deep: 4 } },
            { emoji: "🤗", text: "Physical touch / presence", scores: { social: 4, creative: 1, chill: 4, energy: 3, deep: 2 } }
        ]
    }
];

// ─── VIBE CATEGORIES ─────────────────────────────────────────────────────────
const vibeCategories = [
    {
        name: "Chill Vibes",
        emoji: "😌",
        description: "You radiate peaceful energy and find joy in life's quiet moments. Your calm presence is a gift to those around you — you know how to go with the flow while staying true to yourself.",
        dominant: "chill",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        name: "Party Energy",
        emoji: "🎉",
        description: "You're the spark that lights up every room. Your enthusiasm is contagious, and you thrive on bringing people together. Life is a celebration and you're always ready to dance.",
        dominant: "energy",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
    },
    {
        name: "Deep Thinker",
        emoji: "🤔",
        description: "Your mind is a beautiful landscape of thoughts and ideas. You see the world in layers others miss, and your introspective nature leads to profound insights and meaningful connections.",
        dominant: "deep",
        gradient: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)"
    },
    {
        name: "Creative Spark",
        emoji: "🎨",
        description: "Creativity flows through everything you do. You see possibilities where others see obstacles, and your unique perspective brings colour and innovation to the world around you.",
        dominant: "creative",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        name: "Social Butterfly",
        emoji: "🦋",
        description: "You thrive on connection and have a gift for making everyone feel included. Your warmth and genuine interest in others creates lasting friendships wherever you go.",
        dominant: "social",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        name: "Balanced Beam",
        emoji: "⚖️",
        description: "You've found harmony between different aspects of life. Your balanced approach lets you adapt to any situation while staying grounded in your values and authentic self.",
        dominant: "balanced",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let currentQuestion = 0;
let answers = [];
let totalScores = { social: 0, creative: 0, chill: 0, energy: 0, deep: 0 };
let userName = '';
let userAge = 25;
let userGender = 'male';
let xp = 0;
let finalCategory = null;
let finalVibeIndex = 0;

// ─── DOM REFS ─────────────────────────────────────────────────────────────────
const welcomeContainer  = document.getElementById('welcomeContainer');
const quizContainer     = document.getElementById('quizContainer');
const resultsContainer  = document.getElementById('resultsContainer');
const progressContainer = document.getElementById('progressContainer');
const nameInput         = document.getElementById('nameInput');
const ageSlider         = document.getElementById('ageSlider');
const ageValue          = document.getElementById('ageValue');
const startBtn          = document.getElementById('startBtn');
const questionText      = document.getElementById('questionText');
const questionNumber    = document.getElementById('questionNumber');
const optionsContainer  = document.getElementById('optionsContainer');
const backBtn           = document.getElementById('backBtn');
const nextBtn           = document.getElementById('nextBtn');
const progressFill      = document.getElementById('progressFill');
const progressText      = document.getElementById('progressText');
const xpBadge           = document.getElementById('xpBadge');
const xpPop             = document.getElementById('xpPop');
const vibeIndex         = document.getElementById('vibeIndex');
const vibeCategory      = document.getElementById('vibeCategory');
const vibeDescription   = document.getElementById('vibeDescription');
const breakdownChart    = document.getElementById('breakdownChart');
const resultScore       = document.getElementById('resultScore');
const resultCategory    = document.getElementById('resultCategory');
const resultEmoji       = document.getElementById('resultEmoji');
const shareBtn          = document.getElementById('shareBtn');
const downloadBtn       = document.getElementById('downloadBtn');
const retakeBtn         = document.getElementById('retakeBtn');
const toast             = document.getElementById('toast');
const genderOrb         = document.getElementById('genderOrb');
const labelMale         = document.getElementById('labelMale');
const labelFemale       = document.getElementById('labelFemale');
const genderHint        = document.getElementById('genderHint');

// ─── GENDER PICKER ────────────────────────────────────────────────────────────
function setGender(gender) {
    userGender = gender;
    if (gender === 'female') {
        genderOrb.classList.add('female');
        genderOrb.querySelector('.gender-icon-inner').textContent = '♀';
        labelMale.classList.remove('active');
        labelMale.classList.add('inactive');
        labelFemale.classList.add('active');
        genderHint.textContent = 'She/Her energy selected ✨';
    } else {
        genderOrb.classList.remove('female');
        genderOrb.querySelector('.gender-icon-inner').textContent = '♂';
        labelFemale.classList.remove('active');
        labelMale.classList.remove('inactive');
        labelMale.classList.add('active');
        genderHint.textContent = 'He/Him energy selected ✨';
    }
}

genderOrb.addEventListener('click', () => {
    setGender(userGender === 'male' ? 'female' : 'male');
    validateWelcomeForm();
});

// Also allow clicking the track itself
document.querySelector('.gender-track').addEventListener('click', (e) => {
    if (e.target !== genderOrb && !genderOrb.contains(e.target)) {
        setGender(userGender === 'male' ? 'female' : 'male');
        validateWelcomeForm();
    }
});

// Init gender labels
labelMale.classList.add('active');

// ─── WELCOME ──────────────────────────────────────────────────────────────────
function initWelcome() {
    userName = '';
    userAge = 25;
    userGender = 'male';
    nameInput.value = '';
    ageSlider.value = 25;
    ageValue.textContent = '25';
    startBtn.disabled = true;
    setGender('male');
    genderHint.textContent = 'Tap to switch ↔';

    welcomeContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    progressContainer.classList.add('hidden');
}

function validateWelcomeForm() {
    startBtn.disabled = !(userName.length > 0 && userAge >= 13);
}

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
    if (userName && userAge) initQuiz();
});

// ─── QUIZ INIT ────────────────────────────────────────────────────────────────
function initQuiz() {
    currentQuestion = 0;
    answers = [];
    xp = 0;
    totalScores = { social: 0, creative: 0, chill: 0, energy: 0, deep: 0 };

    welcomeContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    progressContainer.classList.remove('hidden');

    showQuestion();
}

// ─── SHOW QUESTION ────────────────────────────────────────────────────────────
function showQuestion() {
    const question = questions[currentQuestion];

    // Animate card
    const card = document.getElementById('questionCard');
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'fadeIn 0.4s ease-out';

    questionNumber.textContent = `Q${currentQuestion + 1}`;
    questionText.textContent = question.question;

    // Decide layout: emoji cards are always 2-col
    optionsContainer.innerHTML = '';
    optionsContainer.className = 'options-container grid-2';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.index = index;

        btn.innerHTML = `
            <span class="option-emoji">${option.emoji}</span>
            <span class="option-text">${option.text}</span>
            <span class="option-check">✓</span>
        `;

        if (answers[currentQuestion] === index) {
            btn.classList.add('selected');
        }

        btn.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(btn);
    });

    updateProgress();
    backBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = answers[currentQuestion] === undefined;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? 'See Results 🎯' : 'Next →';
}

// ─── SELECT OPTION ────────────────────────────────────────────────────────────
function selectOption(index) {
    const wasAnswered = answers[currentQuestion] !== undefined;
    answers[currentQuestion] = index;

    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });

    nextBtn.disabled = false;

    // Award XP only on first answer for this question
    if (!wasAnswered) {
        xp += 10;
        xpBadge.textContent = `⚡ ${xp} XP`;
        showXpPop();
    }

    // Auto-advance after brief delay for smooth UX
    setTimeout(() => {
        if (answers[currentQuestion] !== undefined) navigate('next');
    }, 320);
}

// ─── XP POP ───────────────────────────────────────────────────────────────────
function showXpPop() {
    xpPop.classList.remove('hidden');
    xpPop.style.animation = 'none';
    xpPop.offsetHeight;
    xpPop.style.animation = 'xpFloat 0.8s ease-out forwards';
    setTimeout(() => xpPop.classList.add('hidden'), 850);
}

// ─── PROGRESS ─────────────────────────────────────────────────────────────────
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

// ─── NAVIGATE ─────────────────────────────────────────────────────────────────
function navigate(direction) {
    if (direction === 'next') {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            calculateResults();
        }
    } else if (direction === 'back' && currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

backBtn.addEventListener('click', () => navigate('back'));
nextBtn.addEventListener('click', () => navigate('next'));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && !nextBtn.disabled) navigate('next');
    if (e.key === 'ArrowLeft'  && !backBtn.disabled)  navigate('back');
});

// ─── CALCULATE RESULTS ────────────────────────────────────────────────────────
function calculateResults() {
    totalScores = { social: 0, creative: 0, chill: 0, energy: 0, deep: 0 };

    answers.forEach((answerIndex, qIndex) => {
        const selected = questions[qIndex].options[answerIndex];
        Object.keys(selected.scores).forEach(dim => {
            totalScores[dim] += selected.scores[dim];
        });
    });

    // Vibe index: weighted toward dominant dimension for more spread
    const maxPerDim = questions.length * 5;           // max score per dimension
    const totalMax  = maxPerDim * 5;
    const rawSum    = Object.values(totalScores).reduce((a, b) => a + b, 0);
    const maxVal    = Math.max(...Object.values(totalScores));
    const dominance = maxVal / maxPerDim;             // 0-1, how dominant the peak is

    // Blend raw sum (50%) + dominance amplifier (50%) → wider spread
    const rawPct   = rawSum / totalMax;
    const blended  = rawPct * 0.5 + dominance * 0.5;
    finalVibeIndex = Math.round(blended * 100);
    finalVibeIndex = Math.max(5, Math.min(98, finalVibeIndex)); // clamp

    // Find dominant dimension
    const dominantDim = Object.keys(totalScores).reduce((a, b) =>
        totalScores[a] >= totalScores[b] ? a : b
    );

    // Check if scores are close → balanced
    const sortedVals = Object.values(totalScores).sort((a, b) => b - a);
    const isBalanced = (sortedVals[0] - sortedVals[4]) < (maxPerDim * 0.25);

    finalCategory = isBalanced
        ? vibeCategories.find(c => c.dominant === 'balanced')
        : (vibeCategories.find(c => c.dominant === dominantDim) || vibeCategories[vibeCategories.length - 1]);

    displayResults();
}

// ─── DISPLAY RESULTS ─────────────────────────────────────────────────────────
function displayResults() {
    quizContainer.classList.add('hidden');
    progressContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    const greeting = userName ? `${userName}'s Vibe` : 'Your Vibe';
    document.getElementById('resultsTitle').textContent = greeting;

    // Animate score ring
    const circumference = 2 * Math.PI * 70; // r=70
    const ringFill = document.getElementById('ringFill');

    // Inject SVG gradient dynamically
    const svg = document.getElementById('scoreRingSvg');
    if (!svg.querySelector('defs')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = `
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stop-color="#f093fb"/>
                <stop offset="100%" stop-color="#f5576c"/>
            </linearGradient>`;
        svg.prepend(defs);
    }

    ringFill.style.strokeDasharray  = circumference;
    ringFill.style.strokeDashoffset = circumference;

    setTimeout(() => {
        const offset = circumference * (1 - finalVibeIndex / 100);
        ringFill.style.strokeDashoffset = offset;
    }, 100);

    animateValue(vibeIndex, 0, finalVibeIndex, 1500);

    vibeCategory.textContent    = `${finalCategory.emoji} ${finalCategory.name}`;
    vibeDescription.textContent = finalCategory.description;

    resultEmoji.textContent    = finalCategory.emoji;
    resultScore.textContent    = finalVibeIndex;
    resultCategory.textContent = finalCategory.name;

    // Style result card with category gradient
    document.getElementById('resultCard').style.background = finalCategory.gradient;

    renderBreakdownChart();
}

// ─── ANIMATE VALUE ────────────────────────────────────────────────────────────
function animateValue(el, start, end, duration) {
    const startTime = performance.now();
    function update(now) {
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 4);
        el.textContent = Math.round(start + (end - start) * ease);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ─── BREAKDOWN CHART ─────────────────────────────────────────────────────────
function renderBreakdownChart() {
    const dimensions = [
        { key: 'social',   label: '🦋 Social',   color: '#667eea' },
        { key: 'creative', label: '🎨 Creative',  color: '#f093fb' },
        { key: 'chill',    label: '😌 Chill',     color: '#4facfe' },
        { key: 'energy',   label: '⚡ Energy',    color: '#f5576c' },
        { key: 'deep',     label: '🤔 Deep',      color: '#764ba2' }
    ];

    const maxScore = questions.length * 5;

    breakdownChart.innerHTML = dimensions.map(dim => {
        const pct = Math.round((totalScores[dim.key] / maxScore) * 100);
        return `
            <div class="breakdown-item">
                <span class="breakdown-label">${dim.label}</span>
                <div class="breakdown-bar">
                    <div class="breakdown-fill" style="background:${dim.color}; width:0%"></div>
                </div>
                <span class="breakdown-value">${pct}%</span>
            </div>`;
    }).join('');

    setTimeout(() => {
        breakdownChart.querySelectorAll('.breakdown-fill').forEach((fill, i) => {
            const pct = Math.round((totalScores[dimensions[i].key] / maxScore) * 100);
            fill.style.width = `${pct}%`;
        });
    }, 150);
}

// ─── SHARE (clipboard) ───────────────────────────────────────────────────────
function shareResult() {
    const pronouns = userGender === 'female' ? 'Her' : 'His';
    let text = `✨ ${userName ? `${userName}'s` : 'My'} Vibe Check\n`;
    text += `Score: ${finalVibeIndex}/100 — ${finalCategory.emoji} ${finalCategory.name}\n\n`;
    text += finalCategory.description + '\n\n';
    text += `Find your vibe at vibecheck.app`;

    navigator.clipboard.writeText(text).then(showToast).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast();
    });
}

// ─── DOWNLOAD AS IMAGE ───────────────────────────────────────────────────────
function downloadAsImage() {
    const canvas  = document.getElementById('exportCanvas');
    const ctx     = canvas.getContext('2d');
    const W = 600, H = 380;
    canvas.width  = W;
    canvas.height = H;

    // Parse gradient for background
    const gradColors = {
        chill:    ['#4facfe', '#00f2fe'],
        energy:   ['#f6d365', '#fda085'],
        deep:     ['#764ba2', '#667eea'],
        creative: ['#f093fb', '#f5576c'],
        social:   ['#667eea', '#764ba2'],
        balanced: ['#43e97b', '#38f9d7']
    };
    const [c1, c2] = gradColors[finalCategory.dominant] || gradColors.social;

    // Background gradient
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, c1);
    bg.addColorStop(1, c2);
    ctx.fillStyle = bg;
    ctx.roundRect(0, 0, W, H, 20);
    ctx.fill();

    // Frosted overlay
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    ctx.beginPath();
    ctx.ellipse(W * 0.8, H * 0.2, 180, 140, 0, 0, Math.PI * 2);
    ctx.fill();

    // Emoji
    ctx.font = '72px serif';
    ctx.textAlign = 'center';
    ctx.fillText(finalCategory.emoji, W / 2, 100);

    // Score
    ctx.font = 'bold 70px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = 'white';
    ctx.shadowColor = 'rgba(0,0,0,0.2)';
    ctx.shadowBlur = 12;
    ctx.fillText(`${finalVibeIndex}`, W / 2, 185);
    ctx.shadowBlur = 0;

    // "/ 100"
    ctx.font = '22px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText('/ 100', W / 2, 215);

    // Category name
    ctx.font = 'bold 30px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = 'white';
    ctx.fillText(`${finalCategory.name}`, W / 2, 260);

    // User name
    if (userName) {
        ctx.font = '18px system-ui, -apple-system, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.fillText(`${userName}'s Vibe Check`, W / 2, 300);
    }

    // Bottom tagline
    ctx.font = '14px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText('vibecheck.app', W / 2, 348);

    // Download
    const link = document.createElement('a');
    link.download = `${userName || 'vibe'}-check.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    showToast('Image saved! 🖼️');
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg = 'Result copied to clipboard!') {
    toast.textContent = msg;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ─── RETAKE ───────────────────────────────────────────────────────────────────
function retakeQuiz() {
    resultsContainer.classList.add('hidden');
    initWelcome();
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────
shareBtn.addEventListener('click', shareResult);
downloadBtn.addEventListener('click', downloadAsImage);
retakeBtn.addEventListener('click', retakeQuiz);

// ─── BOOTSTRAP ───────────────────────────────────────────────────────────────
initWelcome();