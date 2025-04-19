import React, { useEffect, useRef } from 'react';

const ChatWindow = ({ messages }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`chat-bubble ${msg.role}`}
        >
          {msg.content}
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default ChatWindow;
