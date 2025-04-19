import axios from 'axios';

export const translate = async (text, targetLang) => {
  try {
    const res = await axios.post('http://localhost:4000/translate', {
      input: [text],
      src_lang: 'en',
      tgt_lang: targetLang,
      platform: 'web'
    });
    return res.data.output[0];
  } catch (err) {
    console.error('Translation error:', err);
    return text;
  }
};
