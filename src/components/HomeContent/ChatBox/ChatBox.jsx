import React, { useState } from 'react';

const ChatBox = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const generateBotResponse = async (history) => {
        const formattedHistory = history.map(msg => ({
            role: msg.type === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: formattedHistory })
        };

        try {
            const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Something went wrong");
            }

            const data = await response.json();

            // Assuming Gemini responds
            const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
            return reply;

        } catch (error) {
            console.error("API Error:", error);
            return "Bot Error: Could not generate a reply.";
        }
    };


    const handleSend = async () => {
        if (message.trim() === '') return;

        const userMessage = { type: 'user', text: message };
        setMessage('');

        // Add user message and temporary bot "Thinking..." message
        setMessages(prev => {
            const newMessages = [...prev, userMessage, { type: 'bot', text: 'Thinking...' }];
            return newMessages;
        });

        const updatedHistory = [...messages, userMessage];

        const botReply = await generateBotResponse(updatedHistory);

        // Replace last "Thinking..." message with actual bot reply
        setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { type: 'bot', text: botReply };
            return updated;
        });
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow">
            <div className="h-96 overflow-y-auto border p-2 mb-4 bg-gray-300 rounded-xl">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`mb-2 p-2 rounded shadow-sm w-fit max-w-[80%] ${msg.type === 'user'
                            ? 'bg-blue-500 text-white ml-auto'
                            : 'bg-green-200 text-black'
                            }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                <input
                    type="text"
                    className="flex-grow border rounded px-2 bg-gray-600 text-white py-1"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button
                    onClick={handleSend}
                    className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBox;

