import React from 'react';

const labels = {
  en: 'Select Language',
  hi: 'भाषा चुनें',
  ta: 'மொழியை தேர்ந்தெடுக்கவும்',
  te: 'భాషను ఎంచుకోండి',
  mr: 'भाषा निवडा',
};

const LanguageSelector = ({ language, setLanguage }) => (
  <div className="language-selector">
    <label style={{ marginRight: '8px' }}>
      {labels[language] || labels['en']}
    </label>
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="ta">Tamil</option>
      <option value="te">Telugu</option>
      <option value="mr">Marathi</option>
    </select>
  </div>
);

export default LanguageSelector;
