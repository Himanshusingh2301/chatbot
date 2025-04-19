import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import InputBox from './components/InputBox';
import LanguageSelector from './components/LanguageSelector';
import './styles.css';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices(); // triggers loading
      };
    }
  }, []);
  
  return (
    <div className="app">
      <h2>SaarthiAI Chatbot</h2>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <ChatWindow messages={messages} />
      <InputBox language={language} setMessages={setMessages} messages={messages} />
    </div>
  );
}
