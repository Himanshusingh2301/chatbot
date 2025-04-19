// import axios from 'axios';

// const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
// console.log("Loaded API Key:", OPENAI_API_KEY); // Add this log to see if the key is loaded

// export const getAIResponse = async (userInput, language) => {
//   if (!OPENAI_API_KEY) {
//     console.error("🔴 API key is missing!");
//     return 'API key is missing. Please check your setup.';
//   }

//   const prompt = `You are a helpful assistant that explains Indian government schemes in simple ${
//     language === 'en' ? 'English' : 'local language'
//   }. Reply to this: ${userInput}`;

//   try {
//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: 'gpt-3.5-turbo',
//         messages: [{ role: 'user', content: prompt }],
//         temperature: 0.7,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${OPENAI_API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     return response.data.choices[0].message.content.trim();
//   } catch (err) {
//     console.error('🔴 OpenAI error:', err.response ? err.response.data : err.message);
//     if (err.response && err.response.status === 429) {
//       return 'आपने बहुत अधिक सवाल पूछे हैं, कृपया कुछ समय बाद पुनः प्रयास करें।';
//     }
//     return 'माफ़ कीजिए, अभी जवाब नहीं दे पा रहा हूँ।';
//   }
// };
