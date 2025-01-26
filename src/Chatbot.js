import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const openApiKey = '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'

  // Function to send the message to OpenAI and get the response
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return; // Don't send if empty
  
    // Add the user's message to chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "user", message: userMessage },
    ]);
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
            "Authorization": `Bearer ${openApiKey}`, // Securely use the API key
            "Content-Type": "application/json",
          },
        }
      );
  
      // Process the response from OpenAI
      const botResponse = response.data.choices[0].message.content.trim();
  
      // Add both user and bot messages to chat history
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "user", message: userMessage },
        { sender: "bot", message: botResponse },
      ]);
  
    } catch (error) {
      // Debugging the error:
      console.error("Error sending message to OpenAI API:", error);
  
      // Fallback for error handling in UI
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "bot", message: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false); // End loading state
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
