import React, { useState } from 'react';
import { matchQuery } from '../utils/matchQuery'; // Assuming you already have this function
import { speak } from '../utils/speech'; // Importing the speak function from speech.js
import MicButton from './MicButton'; // ✅ import your MicButton

const labels = {
  en: { placeholder: "Type or speak your question", send: "Send" },
  hi: { placeholder: "अपना सवाल लिखें या बोलें", send: "भेजें" },
  ta: { placeholder: "உங்கள் கேள்வியை பதிவு செய்யவும்", send: "அனுப்பு" },
  te: { placeholder: "మీ ప్రశ్నను టైప్ చేయండి లేదా మాట్లాడండి", send: "పంపించండి" },
  mr: { placeholder: "आपला प्रश्न टाइप करा किंवा बोला", send: "पाठवा" },
};

const InputBox = ({ language, setMessages, messages }) => {
  const [text, setText] = useState('');

  const handleSend = async () => {
    if (!text) return;

    // Add user's message
    const userMessage = { role: 'user', content: text };
    setMessages([...messages, userMessage]);

    // Match query and get the response
    const reply = matchQuery(text);

    // Add bot's message
    const botMessage = { role: 'bot', content: reply };
    setMessages(prev => [...prev, botMessage]);

    // Speak out the bot's reply in the selected language
    speak(reply, language); // Use the language passed as a prop

    // Clear text input after sending
    setText('');
  };

  const handleSpeechResult = (speechText) => {
    setText(speechText); // Update the input box with the speech text
  };

  const mapLangCode = (lang) => {
    const langMap = {
      en: 'en-IN',
      hi: 'hi-IN',
      ta: 'ta-IN',
      te: 'te-IN',
      mr: 'mr-IN',
    };
    return langMap[lang] || 'en-IN'; // Default to English if no match
  };

  return (
    <div className="input-box">
      <MicButton onSpeechResult={handleSpeechResult} language={mapLangCode(language)} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={labels[language]?.placeholder || labels['en'].placeholder}
      />
      <button onClick={handleSend}>
        {labels[language]?.send || labels['en'].send}
      </button>
    </div>
  );
};

export default InputBox;
