import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to send the message to OpenAI and get the response
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return; // Don't send if empty

    // Add the user's message to chat history
    setChatHistory([...chatHistory, { sender: "user", message: userMessage }]);
    setLoading(true);

    try {
      // Send the user's message to OpenAI's API
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions", // Correct endpoint for chat models
        {
          model: "gpt-3.5-turbo", // Correct model
          messages: [
            { role: "user", content: userMessage }, // Format for chat models
          ],
          max_tokens: 100,
          temperature: 0.7,
        },
        {
          headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Securely use the API key
            "Content-Type": "application/json",
          },
        }
      );

      
      const botResponse = response.data.choices[0].message.content.trim(); 

      
      setChatHistory([
        ...chatHistory,
        { sender: "user", message: userMessage },
        { sender: "bot", message: botResponse },
      ]);
      //setUserMessage(""); 
    } catch (error) {
      console.error("Error sending message to OpenAI API:", error.response || error);
      setChatHistory([
        ...chatHistory,
        { sender: "bot", message: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div style={{ width: "400px", margin: "0 auto", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>AI Chatbot</h2>
      <div
        style={{
          height: "300px",
          overflowY: "scroll",
          border: "1px solid #ddd",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        {chatHistory.map((chat, index) => (
          <div key={index} style={{ textAlign: chat.sender === "user" ? "right" : "left" }}>
            <b>{chat.sender === "user" ? "You" : "Bot"}:</b>
            //<p>{chat.message}</p>
          </div>
        ))}
        {loading && <p>Bot is typing...</p>}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type a message"
          style={{ width: "100%", padding: "10px" }}
          required
        />
        <button type="submit" style={{ marginTop: "10px", padding: "10px", width: "100%" }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
