const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/translate', async (req, res) => {
  try {
    console.log("Incoming request body:", req.body); // Debug log

    const { input, src_lang, tgt_lang, platform } = req.body;

    if (!input || !src_lang || !tgt_lang || !platform) {
      return res.status(400).json({ error: 'Missing fields in request body' });
    }

    const response = await axios.post(
      'https://models.ai4bharat.org/indictrans/v2/translate',
      {
        input,
        src_lang,
        tgt_lang,
        platform
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Translation failed', details: error.response?.data || error.message });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
