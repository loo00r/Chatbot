import React, { useState } from "react";
import UI_block from "./UI_block"; 

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [conversationType, setConversationType] = useState(null);
  const [data, setData] = useState(null); // State to store data from the server

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setChatHistory([...chatHistory, { text: message, user: 'You' }]);
      await handleConversation(message);
      setMessage('');
    }
  };

  const handleConversation = async (message) => {
    let newChatHistory = [...chatHistory];
    let botResponse = '';
    let lastMessage = message; // Initialize lastMessage with the current message

    if (message.includes('info about my music')) {
      setConversationType('musicInfo');
      botResponse = 'Please, provide me a link to your sound in TikTok.';
    } else if (message.includes('analyze my account')) {
      setConversationType('accountAnalysis');
      botResponse = 'Please provide the link to your TikTok account.';
    } else if (message.includes('prediction based on my sound')) {
      setConversationType('soundPrediction');
      botResponse = 'Please link to your sound or video that contains this sound.';
    }

    // Update lastMessage only if there's a bot response
    if (botResponse !== '') {
      lastMessage = message; // Update lastMessage to the current message
      newChatHistory.push({ text: message, user: 'You' });
      newChatHistory.push({ text: botResponse, user: 'Bot' });

      try {
        const response = await fetch(`http://127.0.0.1:3000/app`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            conversationType: conversationType,
            searchQuery: lastMessage // Use lastMessage in the request body
          })
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log('Response from server:', responseData);
          // Set the received data to the state
          setData(responseData);
        } else {
          console.error('Server responded with status', response.status);
        }
      } catch (error) {
        console.error('Error while calling API:', error);
      }
    } else {
      newChatHistory.push({ text: message, user: 'You' });
    }

    setChatHistory(newChatHistory);
  };

  const inputStyle = "mt-1 block w-full border-gray-200 border px-4 focus:border-gray-700 focus:outline-none py-1.5 rounded";
  const labelStyle = "text-black text-sm font-medium";

  return (
    <div className="flex flex-col gap-3 px-2 bg-white rounded-lg">
      <ul>
        {chatHistory.map((message, index) => (
          <li key={index}>
            <strong>{message.user}:</strong> {message.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label className={labelStyle} htmlFor="message">Enter your message:</label>
        <input
          type="text"
          name="message"
          id="message"
          value={message}
          onChange={handleChange}
          className={inputStyle}
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white rounded px-4 py-2">Send</button>
      </form>
      {data && <UI_block data={data} />} {/* Render UI_block if data is available */}
    </div>
  );
};

export default Chatbot;