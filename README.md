<h1 align="center">🧠 Multilingual AI Chatbot for Government Schemes</h1>
<h3 align="center">A Voice & Text-based Assistant for Rural India</h3>
<p align="center">
  <strong>Hackathon:</strong> HACKDUCS 2025<br>
  <strong>Team Name:</strong> BYTEIT<br>
  <strong>Team Leader:</strong> Himanshu Singh<br>
  <strong>Team Members:</strong> Prince Sharma, Prashant Kumar, Rahul Kumar
</p>

<hr>

<h2>🚀 Project Overview</h2>
<p>
  This project is a frontend prototype of a multilingual chatbot that helps rural citizens access and understand Indian government welfare schemes.
  Users can interact via voice or text in English, Hindi, Marathi, or Telugu. The assistant guides users in a simple, friendly way using natural conversation.
</p>

<h2>🎯 Key Features</h2>
<ul>
  <li>🎤 <strong>Voice Input:</strong> Mic button to speak queries in multiple Indian languages.</li>
  <li>💬 <strong>Chatbot Interface:</strong> AI-powered conversational UI for easy access to information.</li>
  <li>🌐 <strong>Multilingual Support:</strong> English, Hindi, Marathi, Telugu (more can be added).</li>
  <li>📚 <strong>Local Knowledge Base:</strong> Government schemes stored in JSON with multilingual entries.</li>
  <li>🔎 <strong>Semantic Search:</strong> AI/embedding-based query matching with relevant schemes.</li>
  <li>🗣️ <strong>Text-to-Speech (TTS):</strong> Responses are read aloud for non-literate users.</li>
</ul>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> React (Create React App)</li>
  <li><strong>Voice:</strong> Web Speech API for Speech-to-Text (STT) and Text-to-Speech (TTS)</li>
  <li><strong>AI/ML:</strong> Embedding-based matching, local AI inference (optional)</li>
  <li><strong>Languages:</strong> JSON knowledge base with multilingual tags, eligibility, links</li>
</ul>

<h2>🧩 Folder Structure</h2>
<pre>
/public
/src
  ├── components
  │   ├── MicButton.jsx
  │   └── ChatInterface.jsx
  ├── data
  │   └── schemes.json
  ├── App.jsx
  └── index.js
</pre>

<h2>📦 How to Run the Project Locally</h2>

<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/Himanshusingh2301/chatbot.git</code></pre>
  </li>
  <li>Navigate to the project folder:
    <pre><code>cd chatbot</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Start the development server:
    <pre><code>npm start</code></pre>
  </li>
</ol>

<h2>🌟 Sample Query Examples</h2>
<ul>
  <li><i>"मुझे किसानों के लिए योजना बताओ"</i> → PM-Kisan</li>
  <li><i>"घर बनाने के लिए मदद चाहिए"</i> → PM Awas Yojana</li>
  <li><i>"आयुष्मान भारत योजना क्या है?"</i> → Health Insurance Info</li>
</ul>

<h2>📚 Data Source</h2>
<ul>
  <li>Local JSON database for welfare schemes</li>
  <li>Official government portals (linked in each scheme)</li>
</ul>

<h2>🙌 Acknowledgements</h2>
<ul>
  <li>🧠 <a href="https://ai4bharat.iitm.ac.in">AI4Bharat</a> for language models and Indic translation tools</li>
  <li>🔊 Google Web Speech API for speech recognition and synthesis</li>
  <li>📘 Indian Government Portals for scheme data (PM-Kisan, PMAY, Ayushman Bharat, etc.)</li>
</ul>

<h2>💡 Future Improvements</h2>
<ul>
  <li>✅ Backend integration with Django & Firebase Auth</li>
  <li>📲 PWA support for offline access</li>
  <li>🗂️ Expansion of scheme database with real-time updates from official APIs</li>
  <li>🧾 Eligibility wizard for step-by-step guidance</li>
</ul>

<h2>🧑‍💻 Team BYTEIT</h2>
<ul>
  <li><strong>👨‍💼 Himanshu Singh</strong> – Team Leader, AI Logic, React Integration</li>
  <li><strong>👨‍💻 Prince Sharma</strong> – UI/UX, Multilingual Design</li>
  <li><strong>👨‍🔧 Prashant Kumar</strong> – Data & Scheme Structuring</li>
  <li><strong>🧪 Rahul Kumar</strong> – Testing, Bug Fixing, Performance</li>
</ul>



<hr>

<p align="center">Made with ❤️ by Team BYTEIT for the rural empowerment of India </p>
