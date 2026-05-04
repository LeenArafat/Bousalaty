import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const replies = [
    "مرحباً! جاهز لمساعدتك 🎓",
    "اضغط ابدأ الآن للاختبار الذكي!",
    "سنحلل مهاراتك بدقة عالية 🚀",
    "أي سؤال عن التخصصات؟",
    "شكراً لثقتك فينا 😊"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { text: input, user: true }]);
    setTimeout(() => {
            const reply = replies[Math.floor(Math.random() * replies.length)];
      setMessages(prev => [...prev, { text: reply, user: false }]);
    }, 800);
    setInput('');
  };

  return (
    <>
      <button 
        className="chatbot-orb"
        onClick={() => setIsOpen(!isOpen)}
        title="الدردشة الذكية"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
      </button>

      {isOpen && (
        <div className={`chat-window ${isOpen ? 'open' : ''}`}>
          <div className="chat-header">
            <div className="d-flex align-items-center">
              <i className="fas fa-robot text-primary me-2 fs-4"></i>
              <div>
                <h6>مساعد AI</h6>
                <small className="opacity-75">متواجد 24/7</small>
              </div>
            </div>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="text-center text-muted p-4">
                مرحباً! اطرح سؤالك 📝
              </div>
            )}
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`message ${msg.user ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <div className="input-group">
              <input
                className="form-control"
                placeholder="اكتب رسالتك..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && sendMessage()}
              />
              <button className="btn btn-primary" onClick={sendMessage}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;