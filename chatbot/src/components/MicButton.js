import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const MicButton = ({ onSpeechResult, language = 'en-IN' }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (transcript && !listening) {
      onSpeechResult(transcript); // Send transcript to parent
      resetTranscript();
    }
  }, [listening, transcript]);

  useEffect(() => {
    setIsListening(listening);
  }, [listening]);

  if (!browserSupportsSpeechRecognition) {
    return <p>Speech recognition not supported.</p>;
  }

  const handleMicClick = () => {
    if (!isListening) {
      SpeechRecognition.startListening({ continuous: false, language });
    } else {
      SpeechRecognition.stopListening();
    }
  };

  return (
    <button
      className={`mic-btn ${isListening ? 'listening' : ''}`}
      onClick={handleMicClick}
      title="Tap to speak"
    >

    </button>
  );
};

export default MicButton;