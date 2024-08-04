import { useState, useContext } from 'react'
import { MessagesList } from '../NavigationBar/NavigationBar';

import axios from 'axios'
import './ChatPage.css'

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

function ChatPage() {
    const [messages, setMessages] = useContext(MessagesList);

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
                Authorization: `Bearer ${OPENAI_API_KEY}`,
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
        <div className='chat-component'>
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.role === 'user' ? 'user-message' : 'bot-message'}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className='input-box'>
                <input
                    className='text-input'
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button className='input-button' onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatPage