import React, { useState } from "react";
import './Chatbot.css';
const { GoogleGenerativeAI } = require("@google/generative-ai");

function Chatbot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am Gemini!",
            sender: "Gemini",
        },
    ]);

    const [isPopupOpen, setPopupOpen] = useState(false); 

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSend = async (event) => {
        event.preventDefault();
        if (!input.trim()) return; // Prevent sending empty messages

        const newMessage = {
            message: input,
            sender: "user",
        };

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);
        setInput("");

        await processMessageToGemini(input);
    };

    async function processMessageToGemini(userInput) {
        try {
            // Initialize the GoogleGenerativeAI client
            const genAI = new GoogleGenerativeAI("AIzaSyCRY79dncwxaKPP5WffvNIDJoVVh0g5xm0"); //Replace with your actual API key
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            // Generate content using the user's input
            const result = await model.generateContent(userInput);

            if (result?.response?.text()) {
                const botResponse = result.response.text();

                setMessages((prevMessages) => [
                    ...prevMessages,
                    { message: botResponse, sender: "Gemini" },
                ]);
            } else {
                throw new Error("No response text from Gemini.");
            }
        } catch (error) {
            console.error("Error with Gemini API:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    message: "Sorry, something went wrong. Please try again later.",
                    sender: "Gemini",
                },
            ]);
        }
    }

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen); 
    };

    return (
        
        <div>
            {/* Button to open the chatbot popup */}
            <button className="open-chatbot-button" onClick={togglePopup}>
                Open Chatbot
            </button>

            {/* Chatbot Popup */}
            {isPopupOpen && (
                <div className="chatbot-popup">
                    <div className="popup-content">
                        <h2>Chat with Gemini</h2>
                        <div className="response-area">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={
                                        message.sender === "Gemini"
                                            ? "gpt-message message"
                                            : "user-message message"
                                    }
                                >
                                    {message.message}
                                </div>
                            ))}
                        </div>
                        <div className="prompt-area">
                            <input
                                type="text"
                                placeholder="Send a message..."
                                value={input}
                                onChange={handleChange}
                            />
                            <button className="submit" type="submit" onClick={handleSend}>
                                Send
                            </button>
                        </div>
                        <button className="close-popup" onClick={togglePopup}>
                            Close Chatbot
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Chatbot;
