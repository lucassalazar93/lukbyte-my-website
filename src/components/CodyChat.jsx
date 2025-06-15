import React, { useState, useEffect, useRef } from 'react';
import './CodyChat.css';

const CodyChat = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hola, soy Cody 🐝 ¿En qué puedo ayudarte hoy?' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('http://localhost:5000/api/cody/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          sessionId: 'cody-session',
        }),
      });

      const data = await res.json();
      const reply = data.reply || 'No entendí, ¿podrías repetirlo?';
      setMessages((prev) => [...prev, { from: 'bot', text: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: '⚠️ Error al conectar con el asistente.' },
      ]);
    }
  };

  return (
    <div className="cody-container">
      <button className="cody-toggle" onClick={toggleChat}>
        <img src="/cody.png" alt="Cody" className="cody-avatar" />
      </button>

      {isOpen && (
        <div className="cody-chat">
          <div className="cody-header">
            <span className="cody-title">Asistente Cody</span>
            <button className="cody-close" onClick={toggleChat}>
              ×
            </button>
          </div>

          <div className="chat-window">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.from}`}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodyChat;
