import { useState } from 'react'

import axios from 'axios'

import './ChatPage.css'

function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (input.trim() === '') return;

        const userMessage = { role: 'user', content: input };
        setMessages([...messages, userMessage]);
        setInput('');

        try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
            model: 'gpt-3.5-turbo',
            messages: [...messages, userMessage],
            },
            {
            headers: {
                Authorization: `Bearer API KEY`,
            },
            }
        );

        const botMessage = response.data.choices[0].message;
        setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
        console.error('Error fetching response:', error);
        }
    };

    return (
        <div>
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.role === 'user' ? 'user-message' : 'bot-message'}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
      <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatPage