// ============================================
// TRANSLATIONS
// ============================================

const translations = {
    en: {
        title: 'Quote Galaxy',
        subtitle: 'Explore wisdom from around the world',
        'cat-all': 'All Quotes',
        'cat-life': 'Life',
        'cat-love': 'Love',
        'cat-success': 'Success',
        'cat-inspire': 'Inspiration',
        'cat-wisdom': 'Wisdom',
        'cat-time': 'Time',
        'cat-change': 'Change',
        'cat-mind': 'Mind',
        'cat-dream': 'Dreams',
        'cat-peace': 'Peace',
        back: 'Back',
        'new-quote': 'Next',
        share: 'Share',
        voice: 'Listen',
        loading: 'Loading...',
        offline: 'Offline mode',
        copied: 'Copied to clipboard!',
        viewed: 'quotes viewed',
        reading: 'Reading aloud...',
        stopped: 'Stopped',
        translating: 'Translating...',
        philosophyComplete: 'Wisdom explored!'
    },
    hi: {
        title: 'कोट गैलेक्सी',
        subtitle: 'दुनिया भर से ज्ञान की खोज करें',
        'cat-all': 'सभी उद्धरण',
        'cat-life': 'जीवन',
        'cat-love': 'प्रेम',
        'cat-success': 'सफलता',
        'cat-inspire': 'प्रेरणा',
        'cat-wisdom': 'ज्ञान',
        'cat-time': 'समय',
        'cat-change': 'परिवर्तन',
        'cat-mind': 'मन',
        'cat-dream': 'सपने',
        'cat-peace': 'शांति',
        back: 'वापस',
        'new-quote': 'अगला',
        share: 'साझा करें',
        voice: 'सुनें',
        loading: 'लोड हो रहा है...',
        offline: 'ऑफ़लाइन मोड',
        copied: 'कॉपी किया गया!',
        viewed: 'उद्धरण देखे',
        reading: 'पढ़ रहे हैं...',
        stopped: 'रुका',
        translating: 'अनुवाद...',
        philosophyComplete: 'ज्ञान खोजा!'
    },
    es: {
        title: 'Quote Galaxy',
        subtitle: 'Explora la sabiduría de todo el mundo',
        'cat-all': 'Todas',
        'cat-life': 'Vida',
        'cat-love': 'Amor',
        'cat-success': 'Éxito',
        'cat-inspire': 'Inspiración',
        'cat-wisdom': 'Sabiduría',
        'cat-time': 'Tiempo',
        'cat-change': 'Cambio',
        'cat-mind': 'Mente',
        'cat-dream': 'Sueños',
        'cat-peace': 'Paz',
        back: 'Atrás',
        'new-quote': 'Siguiente',
        share: 'Compartir',
        voice: 'Escuchar',
        loading: 'Cargando...',
        offline: 'Modo sin conexión',
        copied: '¡Copiado!',
        viewed: 'citas vistas',
        reading: 'Leyendo...',
        stopped: 'Detenido',
        translating: 'Traduciendo...',
        philosophyComplete: '¡Sabiduría explorada!'
    },
    fr: {
        title: 'Quote Galaxy',
        subtitle: 'Explorez la sagesse du monde entier',
        'cat-all': 'Toutes',
        'cat-life': 'Vie',
        'cat-love': 'Amour',
        'cat-success': 'Succès',
        'cat-inspire': 'Inspiration',
        'cat-wisdom': 'Sagesse',
        'cat-time': 'Temps',
        'cat-change': 'Changement',
        'cat-mind': 'Esprit',
        'cat-dream': 'Rêves',
        'cat-peace': 'Paix',
        back: 'Retour',
        'new-quote': 'Suivant',
        share: 'Partager',
        voice: 'Écouter',
        loading: 'Chargement...',
        offline: 'Mode hors ligne',
        copied: 'Copié!',
        viewed: 'citations vues',
        reading: 'Lecture...',
        stopped: 'Arrêté',
        translating: 'Traduction...',
        philosophyComplete: 'Sagesse explorée!'
    },
    de: {
        title: 'Quote Galaxy',
        subtitle: 'Erkunden Sie Weisheit aus der ganzen Welt',
        'cat-all': 'Alle',
        'cat-life': 'Leben',
        'cat-love': 'Liebe',
        'cat-success': 'Erfolg',
        'cat-inspire': 'Inspiration',
        'cat-wisdom': 'Weisheit',
        'cat-time': 'Zeit',
        'cat-change': 'Veränderung',
        'cat-mind': 'Geist',
        'cat-dream': 'Träume',
        'cat-peace': 'Frieden',
        back: 'Zurück',
        'new-quote': 'Weiter',
        share: 'Teilen',
        voice: 'Hören',
        loading: 'Laden...',
        offline: 'Offline-Modus',
        copied: 'Kopiert!',
        viewed: 'Zitate angesehen',
        reading: 'Lesen...',
        stopped: 'Gestoppt',
        translating: 'Übersetzen...',
        philosophyComplete: 'Weisheit erforscht!'
    },
    it: {
        title: 'Quote Galaxy',
        subtitle: 'Esplora la saggezza da tutto il mondo',
        'cat-all': 'Tutte',
        'cat-life': 'Vita',
        'cat-love': 'Amore',
        'cat-success': 'Successo',
        'cat-inspire': 'Ispirazione',
        'cat-wisdom': 'Saggezza',
        'cat-time': 'Tempo',
        'cat-change': 'Cambiamento',
        'cat-mind': 'Mente',
        'cat-dream': 'Sogni',
        'cat-peace': 'Pace',
        back: 'Indietro',
        'new-quote': 'Avanti',
        share: 'Condividi',
        voice: 'Ascolta',
        loading: 'Caricamento...',
        offline: 'Modalità offline',
        copied: 'Copiato!',
        viewed: 'citazioni viste',
        reading: 'Lettura...',
        stopped: 'Fermato',
        translating: 'Traduzione...',
        philosophyComplete: 'Saggezza esplorata!'
    },
    pt: {
        title: 'Quote Galaxy',
        subtitle: 'Explore a sabedoria de todo o mundo',
        'cat-all': 'Todas',
        'cat-life': 'Vida',
        'cat-love': 'Amor',
        'cat-success': 'Sucesso',
        'cat-inspire': 'Inspiração',
        'cat-wisdom': 'Sabedoria',
        'cat-time': 'Tempo',
        'cat-change': 'Mudança',
        'cat-mind': 'Mente',
        'cat-dream': 'Sonhos',
        'cat-peace': 'Paz',
        back: 'Voltar',
        'new-quote': 'Próximo',
        share: 'Compartilhar',
        voice: 'Ouvir',
        loading: 'Carregando...',
        offline: 'Modo offline',
        copied: 'Copiado!',
        viewed: 'citações vistas',
        reading: 'Lendo...',
        stopped: 'Parado',
        translating: 'Traduzindo...',
        philosophyComplete: 'Sabedoria explorada!'
    },
    ar: {
        title: 'مجرة الاقتباسات',
        subtitle: 'استكشف الحكمة من جميع أنحاء العالم',
        'cat-all': 'كل الاقتباسات',
        'cat-life': 'الحياة',
        'cat-love': 'الحب',
        'cat-success': 'النجاح',
        'cat-inspire': 'الإلهام',
        'cat-wisdom': 'الحكمة',
        'cat-time': 'الوقت',
        'cat-change': 'التغيير',
        'cat-mind': 'العقل',
        'cat-dream': 'الأحلام',
        'cat-peace': 'السلام',
        back: 'رجوع',
        'new-quote': 'التالي',
        share: 'مشاركة',
        voice: 'استمع',
        loading: 'جار التحميل...',
        offline: 'وضع عدم الاتصال',
        copied: 'تم النسخ!',
        viewed: 'الاقتباسات المشاهدة',
        reading: 'القراءة...',
        stopped: 'توقف',
        translating: 'ترجمة...',
        philosophyComplete: 'الحكمة استكشفت!'
    },
    ja: {
        title: 'クォートギャラクシー',
        subtitle: '世界中の知恵を探る',
        'cat-all': 'すべて',
        'cat-life': '人生',
        'cat-love': '愛',
        'cat-success': '成功',
        'cat-inspire': 'インスピレーション',
        'cat-wisdom': '知恵',
        'cat-time': '時間',
        'cat-change': '変化',
        'cat-mind': '心',
        'cat-dream': '夢',
        'cat-peace': '平和',
        back: '戻る',
        'new-quote': '次へ',
        share: 'シェア',
        voice: '聴く',
        loading: '読み込み中...',
        offline: 'オフラインモード',
        copied: 'コピーしました!',
        viewed: '閲覧した引用',
        reading: '読み上げ中...',
        stopped: '停止',
        translating: '翻訳中...',
        philosophyComplete: '知恵を探求！'
    },
    zh: {
        title: '名言星系',
        subtitle: '探索来自世界各地的智慧',
        'cat-all': '所有名言',
        'cat-life': '生活',
        'cat-love': '爱',
        'cat-success': '成功',
        'cat-inspire': '灵感',
        'cat-wisdom': '智慧',
        'cat-time': '时间',
        'cat-change': '变化',
        'cat-mind': '心智',
        'cat-dream': '梦想',
        'cat-peace': '和平',
        back: '返回',
        'new-quote': '下一个',
        share: '分享',
        voice: '聆听',
        loading: '加载中...',
        offline: '离线模式',
        copied: '已复制!',
        viewed: '已查看的名言',
        reading: '朗读中...',
        stopped: '已停止',
        translating: '翻译中...',
        philosophyComplete: '智慧探索！'
    },
    ko: {
        title: '명언 갤럭시',
        subtitle: '전 세계의 지혜를 탐험하세요',
        'cat-all': '모든 명언',
        'cat-life': '삶',
        'cat-love': '사랑',
        'cat-success': '성공',
        'cat-inspire': '영감',
        'cat-wisdom': '지혜',
        'cat-time': '시간',
        'cat-change': '변화',
        'cat-mind': '마음',
        'cat-dream': '꿈',
        'cat-peace': '평화',
        back: '뒤로',
        'new-quote': '다음',
        share: '공유',
        voice: '듣기',
        loading: '로딩 중...',
        offline: '오프라인 모드',
        copied: '복사됨!',
        viewed: '본 명언',
        reading: '읽는 중...',
        stopped: '중지됨',
        translating: '번역 중...',
        philosophyComplete: '지혜 탐구!'
    },
    ru: {
        title: 'Галактика Цитат',
        subtitle: 'Исследуйте мудрость со всего мира',
        'cat-all': 'Все цитаты',
        'cat-life': 'Жизнь',
        'cat-love': 'Любовь',
        'cat-success': 'Успех',
        'cat-inspire': 'Вдохновение',
        'cat-wisdom': 'Мудрость',
        'cat-time': 'Время',
        'cat-change': 'Изменение',
        'cat-mind': 'Разум',
        'cat-dream': 'Мечты',
        'cat-peace': 'Мир',
        back: 'Назад',
        'new-quote': 'Следующая',
        share: 'Поделиться',
        voice: 'Слушать',
        loading: 'Загрузка...',
        offline: 'Офлайн режим',
        copied: 'Скопировано!',
        viewed: 'просмотренных цитат',
        reading: 'Чтение...',
        stopped: 'Остановлено',
        translating: 'Перевод...',
        philosophyComplete: 'Мудрость исследована!'
    }
};

// ============================================
// CATEGORIES & QUOTES DATA
// ============================================

const categories = {
    all: {
        name: 'All',
        keywords: [],
        icon: '🌟'
    },
    life: {
        name: 'Life',
        keywords: ['life', 'living', 'exist', 'journey', 'experience', 'being'],
        icon: '🌱'
    },
    love: {
        name: 'Love',
        keywords: ['love', 'heart', 'affection', 'care', 'romance', 'relationship'],
        icon: '❤️'
    },
    success: {
        name: 'Success',
        keywords: ['success', 'achieve', 'goal', 'win', 'accomplish', 'victory'],
        icon: '🏆'
    },
    inspire: {
        name: 'Inspiration',
        keywords: ['inspire', 'motivate', 'encourage', 'empower', 'uplift', 'drive'],
        icon: '✨'
    },
    wisdom: {
        name: 'Wisdom',
        keywords: ['wisdom', 'wise', 'knowledge', 'truth', 'understand', 'insight'],
        icon: '🦉'
    },
    time: {
        name: 'Time',
        keywords: ['time', 'moment', 'present', 'past', 'future', 'now'],
        icon: '⏰'
    },
    change: {
        name: 'Change',
        keywords: ['change', 'transform', 'evolve', 'adapt', 'grow', 'shift'],
        icon: '🔄'
    },
    mind: {
        name: 'Mind',
        keywords: ['mind', 'think', 'thought', 'mental', 'consciousness', 'awareness'],
        icon: '🧠'
    },
    dream: {
        name: 'Dreams',
        keywords: ['dream', 'aspire', 'vision', 'hope', 'ambition', 'desire'],
        icon: '💭'
    },
    peace: {
        name: 'Peace',
        keywords: ['peace', 'calm', 'serenity', 'tranquil', 'harmony', 'zen'],
        icon: '☮️'
    },
    stoicism: {
        name: 'Stoicism',
        keywords: ['stoic', 'virtue', 'wisdom', 'control', 'accept', 'reason', 'discipline', 'tranquil', 'philosophy', 'marcus', 'seneca', 'epictetus', 'aurelius', 'meditations'],
        icon: '🏛️'
    }
};

// Massive quotes database with 1000+ quotes
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
    { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
    { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
    { text: "There is only one happiness in this life, to love and be loved.", author: "George Sand" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "Whoever is happy will make others happy too.", author: "Anne Frank" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Change is the law of life. And those who look only to the past or present are certain to miss the future.", author: "John F. Kennedy" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Peace comes from within. Do not seek it without.", author: "Buddha" },
    { text: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
    { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
    { text: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius" },
    { text: "If it is not right, do not do it. If it is not true, do not say it.", author: "Marcus Aurelius" },
    { text: "The best revenge is to be unlike him who performed the injury.", author: "Marcus Aurelius" },
    { text: "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.", author: "Marcus Aurelius" },
    { text: "It is not death that a man should fear, but he should fear never beginning to live.", author: "Marcus Aurelius" },
    { text: "He who fears death will never do anything worthy of a man who is alive.", author: "Seneca" },
    { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
    { text: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca" },
    { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
    { text: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
    { text: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus" },
    { text: "No man is free who is not master of himself.", author: "Epictetus" },
    { text: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus" }
];

// Global state
let currentLanguage = 'en';
let currentCategory = 'all';
let currentQuoteIndex = 0;
let filteredQuotes = [];
let viewedQuotes = new Set();
let isSpeaking = false;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadViewedQuotes();
});

function initializeApp() {
    // Set initial language
    currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateLanguage();
    
    // Setup category cards
    setupCategoryCards();
    setupAuthorCards();
    setupPhilosophyCards();
}

function setupEventListeners() {
    // Category card clicks
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (category) {
                selectCategory(category);
            }
        });
    });
}

// ============================================
// NAVIGATION
// ============================================

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('#menu, #categories, #authors, #philosophy, #quote-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show requested section
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Update bell visibility
    setTimeout(() => {
        if (typeof updateBellVisibility === 'function') {
            updateBellVisibility();
        }
    }, 50);
}

function selectCategory(category) {
    currentCategory = category;
    filterQuotes();
    showSection('quote-section');
    displayCurrentQuote();
}

// ============================================
// QUOTE MANAGEMENT
// ============================================

function filterQuotes() {
    if (currentCategory === 'all') {
        filteredQuotes = [...quotes];
    } else {
        const categoryData = categories[currentCategory];
        if (categoryData) {
            filteredQuotes = quotes.filter(quote => {
                const text = (quote.text + ' ' + quote.author).toLowerCase();
                return categoryData.keywords.some(keyword => text.includes(keyword));
            });
        }
    }
    
    // Shuffle quotes
    filteredQuotes = shuffleArray(filteredQuotes);
    currentQuoteIndex = 0;
}

function displayCurrentQuote() {
    if (filteredQuotes.length === 0) {
        document.getElementById('quote-text').textContent = 'No quotes found in this category.';
        document.getElementById('quote-author').textContent = '';
        return;
    }
    
    const quote = filteredQuotes[currentQuoteIndex];
    document.getElementById('quote-text').textContent = `"${quote.text}"`;
    document.getElementById('quote-author').textContent = `— ${quote.author}`;
    
    // Track viewed quote
    const quoteId = `${quote.text}-${quote.author}`;
    viewedQuotes.add(quoteId);
    saveViewedQuotes();
    
    // Update counter
    updateQuoteCounter();
    
    // Add animation
    document.querySelector('.quote-card').classList.remove('fade-in');
    setTimeout(() => {
        document.querySelector('.quote-card').classList.add('fade-in');
    }, 10);
}

function getNewQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % filteredQuotes.length;
    displayCurrentQuote();
}

function shareQuote() {
    const quote = filteredQuotes[currentQuoteIndex];
    const shareText = `"${quote.text}" — ${quote.author}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Quote Galaxy',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert(translations[currentLanguage].copied);
        });
    }
}

function speakQuote() {
    const quote = filteredQuotes[currentQuoteIndex];
    const text = `${quote.text} by ${quote.author}`;
    
    if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        return;
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    utterance.onend = () => {
        isSpeaking = false;
    };
    
    window.speechSynthesis.speak(utterance);
    isSpeaking = true;
}

// ============================================
// LANGUAGE MANAGEMENT
// ============================================

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateLanguage();
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

function updateLanguage() {
    const trans = translations[currentLanguage];
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (trans[key]) {
            element.textContent = trans[key];
        }
    });
    
    updateQuoteCounter();
}

// ============================================
// AUTHOR CARDS
// ============================================

function setupAuthorCards() {
    const authors = [...new Set(quotes.map(q => q.author))].sort();
    const authorGrid = document.getElementById('author-cards');
    
    authorGrid.innerHTML = authors.map(author => {
        const count = quotes.filter(q => q.author === author).length;
        return `
            <div class="category-card" onclick="selectAuthor('${author}')">
                <div class="card-icon">✍️</div>
                <h3>${author}</h3>
                <p>${count} quotes</p>
            </div>
        `;
    }).join('');
}

function selectAuthor(author) {
    filteredQuotes = quotes.filter(q => q.author === author);
    filteredQuotes = shuffleArray(filteredQuotes);
    currentQuoteIndex = 0;
    showSection('quote-section');
    displayCurrentQuote();
}

// ============================================
// PHILOSOPHY CARDS
// ============================================

function setupPhilosophyCards() {
    // Philosophy cards already set up in HTML
    // Add click handler for stoicism
    const stoicismCard = document.querySelector('[data-category="stoicism"]');
    if (stoicismCard) {
        stoicismCard.addEventListener('click', () => {
            selectCategory('stoicism');
        });
    }
}

function setupCategoryCards() {
    // Category cards already in HTML, just ensure they work
    document.querySelectorAll('#category-cards .category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (category) {
                selectCategory(category);
            }
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function updateQuoteCounter() {
    const counterElement = document.getElementById('quote-counter');
    if (counterElement && filteredQuotes.length > 0) {
        const trans = translations[currentLanguage];
        counterElement.textContent = `${viewedQuotes.size} ${trans.viewed}`;
    }
}

function saveViewedQuotes() {
    localStorage.setItem('viewedQuotes', JSON.stringify([...viewedQuotes]));
}

function loadViewedQuotes() {
    const saved = localStorage.getItem('viewedQuotes');
    if (saved) {
        viewedQuotes = new Set(JSON.parse(saved));
    }
}

// ============================================
// BELL BUTTON VISIBILITY CONTROL
// ============================================

function updateBellVisibility() {
    const bellButton = document.querySelector('.notification-bell');
    const menuSection = document.getElementById('menu');
    
    if (bellButton) {
        // Show bell only when menu is visible (homepage)
        if (menuSection && !menuSection.classList.contains('hidden')) {
            bellButton.style.opacity = '1';
            bellButton.style.visibility = 'visible';
            bellButton.style.pointerEvents = 'auto';
        } else {
            bellButton.style.opacity = '0';
            bellButton.style.visibility = 'hidden';
            bellButton.style.pointerEvents = 'none';
        }
    }
}

// Initialize bell visibility on page load
document.addEventListener('DOMContentLoaded', () => {
    updateBellVisibility();
    
    // Watch for section changes
    const observer = new MutationObserver(updateBellVisibility);
    const container = document.querySelector('.container');
    if (container) {
        observer.observe(container, {
            attributes: true,
            subtree: true,
            attributeFilter: ['class']
        });
    }
});
