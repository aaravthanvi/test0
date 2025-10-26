// ============================================
// TRANSLATIONS
// ============================================
const translations = { /* ... preserve existing translations ... */ };
// NOTE: Ensure 'prev-quote' key is added for each language as shown in prior commit draft.

// ============================================
// VARIABLE DECLARATIONS
// ============================================
// ... keep all existing declarations ...
const prevQuoteBtn = document.getElementById('prev-quote-btn');
let quoteHistory = [];
let historyIndex = -1; // points at current item

// ============================================
// HISTORY HELPERS
// ============================================
function recordHistory(quote) {
  if (currentJourney) return; // journey handled by its own index
  if (historyIndex < quoteHistory.length - 1) {
    quoteHistory = quoteHistory.slice(0, historyIndex + 1);
  }
  quoteHistory.push(quote);
  historyIndex = quoteHistory.length - 1;
  updatePrevNextButtons();
}
function updatePrevNextButtons() {
  if (prevQuoteBtn) prevQuoteBtn.disabled = currentJourney ? journeyCurrentIndex <= 0 : historyIndex <= 0;
}

// ============================================
// DISPLAY QUOTE (patched to support history)
// ============================================
const __displayQuote = typeof displayQuote === 'function' ? displayQuote : null;
async function displayQuote(quote, isLanguageSwitch = false, fromHistory = false) {
  // original body (copied) ...
  currentQuoteData = quote;
  quoteContainer.classList.remove('quote-reveal');
  void quoteContainer.offsetWidth;
  quoteContainer.classList.add('quote-reveal');
  if (currentLanguage !== 'en') {
    statusMessage.innerHTML = '<i class="fas fa-language mr-2"></i>' + translations[currentLanguage].translating;
  }
  const translatedQuote = await translateText(quote.quote, currentLanguage);
  const translatedAuthor = await translateText(quote.author, currentLanguage);
  quoteText.textContent = translatedQuote;
  const authorSpan = quoteAuthor.querySelector('[itemprop="name"]');
  if (authorSpan) authorSpan.textContent = translatedAuthor;
  statusMessage.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${shownQuoteIds.length} ${translations[currentLanguage].viewed}`;
  updateMetaTags({ quote: translatedQuote, author: translatedAuthor });
  // history integration
  if (!fromHistory && !isLanguageSwitch) recordHistory(quote);
  updatePrevNextButtons();
}

// ============================================
// PREVIOUS NAVIGATION
// ============================================
function showPreviousQuote() {
  if (currentJourney) {
    if (journeyCurrentIndex > 0) {
      journeyCurrentIndex--;
      displayQuote(journeyQuotes[journeyCurrentIndex], false, true);
      updateJourneyProgress();
    }
    updatePrevNextButtons();
    return;
  }
  if (historyIndex > 0) {
    historyIndex--;
    const prev = quoteHistory[historyIndex];
    if (prev) displayQuote(prev, false, true);
  }
  updatePrevNextButtons();
}

// ============================================
// INTEGRATE WITH EXISTING FLOWS
// ============================================
const __showQuoteFromCategory = typeof showQuoteFromCategory === 'function' ? showQuoteFromCategory : null;
function showQuoteFromCategory() {
  // call original logic (copied) but ensure recordHistory via displayQuote call
  // This wrapper assumes the original picks a selectedQuote then calls displayQuote(selectedQuote)
  // So we simply call the original implementation which now records history inside displayQuote.
  if (__showQuoteFromCategory) return __showQuoteFromCategory();
}
const __showQuotesByAuthor = typeof showQuotesByAuthor === 'function' ? showQuotesByAuthor : null;
function showQuotesByAuthor() {
  if (__showQuotesByAuthor) return __showQuotesByAuthor();
}
const __nextJourneyQuote = typeof nextJourneyQuote === 'function' ? nextJourneyQuote : null;
function nextJourneyQuote() {
  if (!currentJourney && __nextJourneyQuote) return __nextJourneyQuote();
  journeyCurrentIndex++;
  if (journeyCurrentIndex >= journeyQuotes.length) {
    statusMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i>' + translations[currentLanguage].journeyComplete;
    journeyProgressContainer.classList.add('hidden');
    currentJourney = null;
    updatePrevNextButtons();
    return;
  }
  displayQuote(journeyQuotes[journeyCurrentIndex]);
  updateJourneyProgress();
  updatePrevNextButtons();
}

// ============================================
// EVENT LISTENERS (add previous)
// ============================================
if (prevQuoteBtn) {
  prevQuoteBtn.addEventListener('click', showPreviousQuote);
}

// Extend keyboard controls: P for previous
document.addEventListener('keydown', (e) => {
  if ((e.key === 'p' || e.key === 'P') && !quoteSection.classList.contains('hidden')) {
    e.preventDefault();
    showPreviousQuote();
  }
});

// Initialize state on app load or when entering a mode
function resetHistoryForNewContext() {
  if (!currentJourney) {
    quoteHistory = [];
    historyIndex = -1;
    updatePrevNextButtons();
  }
}
// Reset history when switching category/author/philosophy
categoryButtons.forEach((button) => {
  button.addEventListener('click', resetHistoryForNewContext);
});
philosophyButtons.forEach((button) => {
  button.addEventListener('click', resetHistoryForNewContext);
});
if (browseAuthorsBtn) browseAuthorsBtn.addEventListener('click', resetHistoryForNewContext);

// Ensure button label localized if UI binds via data-i18n elsewhere
// UI markup should include data-i18n="prev-quote" on the prev button.
