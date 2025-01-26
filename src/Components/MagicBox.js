import React, {useState} from 'react';

function MainBox(){
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            message: "Hello I am ChatGPT",
            sender: "ChatGPT"
        }
    ]);

    const handleChange = (event)=>{
        setInput(event.target.value)
    }

    const handleSend = async (event)=>{
        event.preventDefault()
        const newMessage = {
            message: input,
            sender: "user"
        }

        const newMessages = [...messages,newMessage];

        setMessages(newMessages);

        setInput('');

        await processMessageToChatGPT(newMessages);
    }

    async function processMessageToChatGPT(chatMessages){
        const API_KEY = "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"
        let apiMessages = chatMessages.map((messageObject)=>{
            let role="";
            if(messageObject.sender === "ChatGPT"){
                role = "assistant"
            }else{
                role = "user"
            }
            return (
                {role: role, content: messageObject.message}
            )
        });

        const systemMessage = {
            role: "system",
            content: "Explain all concept like i am 10 year old"
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ]
        }

        const response = await fetch("https://api.openai.com/v1/chat/completions",{
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        });
        if (response.ok) {
            const data = await response.json();
            
            // Safely check for 'choices' and 'choices[0]' to avoid undefined errors
            if (data?.choices?.[0]?.message?.content) {
                console.log(data.choices[0].message.content);
    
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        message: data.choices[0].message.content,
                        sender: "ChatGPT"
                    }
                ]);
            } else {
                console.error("No content in response:", data);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { message: "Sorry, I couldn't process your request. Please try again.", sender: "ChatGPT" }
                ]);
            }
        } else {
            console.error("Error with API response:", response.statusText);
            setMessages((prevMessages) => [
                ...prevMessages,
                { message: "Sorry, I couldn't process your request. Please try again.", sender: "ChatGPT" }
            ]);
        }
    }
    return (
        <div className="container">
			<div className="response-area">
                {messages.map((message, index) => {
                    return(
                        <div className={message.sender==="ChatGPT" ? 'gpt-message message' : 'user-message message'}>{message.message}</div>
                    );
                })}
            </div>
			<div className="prompt-area">
				<input type="text" placeholder="Send a message..." value={input} onChange={handleChange}/>
				<button className="submit" type="submit" onClick={handleSend}>Send</button>
			</div>
		</div>
    );
        
}

export default MainBox;