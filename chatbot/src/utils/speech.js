// utils/speech.js

export const speak = (text, lang = 'en') => {
  const synth = window.speechSynthesis;

  if (!synth) return;

  const utterance = new SpeechSynthesisUtterance(text);

  // Map the language code to the corresponding locale for speech synthesis
  const langMap = {
    en: 'en-IN',   // English (India)
    hi: 'hi-IN',   // Hindi
    ta: 'ta-IN',   // Tamil
    te: 'te-IN',   // Telugu
    mr: 'mr-IN',   // Marathi
  };

  utterance.lang = langMap[lang] || 'en-IN';  // Default to English if not found

  // Try to find a matching voice for the selected language
  const voices = synth.getVoices();
  const matchingVoice = voices.find(voice => voice.lang === utterance.lang);

  // If a matching voice is found, set it, else fallback to the default
  if (matchingVoice) {
    utterance.voice = matchingVoice;
  } else {
    console.warn(`No voice found for language: ${utterance.lang}, using default.`);
  }

  // Speak the text
  synth.speak(utterance);
};

// Function to get voices
export const getVoices = () => {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();
  return voices;
};
