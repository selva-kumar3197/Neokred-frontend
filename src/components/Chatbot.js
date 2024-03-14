import React, { useRef, useState } from 'react'
import axios from "axios";
import baseUrl from "@/services/baseurl";
import { fetchchatGpt } from "@/services/apis";
import ResponsiveImage from './HomepageComp/ResponsiveImage';
import imageUrl from "@/imageUrl";

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const handleQuestion = (e) => {
        setInputValue(e)
        // inputRef.current.focus();
    }
    const ChatMessage = ({ isAi, value }) => {
        const prefix = isAi ? 'Answer: ' : 'Question: ';
        return (
            <div className={`wrapper ${isAi && 'ai'}`}>
                <div className="chat">
                    <div className="profile">
                        {/* {profileImage} */}
                    </div>
                    <div className="message"> <span className="prefix-content">{prefix}</span> {value}</div>
                </div>
            </div>
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) {
            return;
        }

        setLoading(true);
        setMessages((prevMessages) => [...prevMessages, { isAi: false, value: inputValue }]);
        setInputValue('');
        const payload = {
            content: inputValue
        };

        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const response = await axios.post(baseUrl + fetchchatGpt, payload, headers);
            console.log(response)

            if (response.status === 200) {
                const parsedData = response.data.content.trim();
                setMessages((prevMessages) => [...prevMessages, { isAi: true, value: parsedData }]);
                typeText(parsedData);
            } else {
            }
        } catch (error) {
            // Handle API request error
        } finally {
            setLoading(false); // Set loading state to false once processing is complete
        }
    };

    const typeText = (text) => {
        let index = 0;
        const typingInterval = setInterval(() => {
            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages];
                updatedMessages[prevMessages.length - 1].value = text.substring(0, index + 1);
                return updatedMessages;
            });
            index++;
            if (index === text.length) {
                clearInterval(typingInterval);
            }
        }, 50);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit(e);
        }
    };
    return (
        <div>
            <div className="questions_section11_bg">
                <div className="questions_section11">
                    <div className="inner_questions_title" onClick={() => handleQuestion("How does ProfileX help to onboard clients in 10 seconds? ")}>
                        How does ProfileX help to onboard clients in 10 seconds?
                    </div>

                    <div className="inner_questions_title" onClick={() => handleQuestion("What are the major touch points in spend management? ")}>What are the major touch points in spend management?</div>
                    <div className="inner_questions_title" onClick={() => handleQuestion("Does AI help to streamline data and strategy? ")}>Does AI help to streamline data and strategy?</div>
                </div>
                <div className="typing_questions_box">
                    <div className="conversation_title">New chat lets you begin a fresh conversation with Neokred related to their products</div>
                    <div className="input_box_title">
                        <input className="input_typing_questions_box" type="text" placeholder="Ask me about the products......." value={inputValue}  onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
                        {inputValue ?
                            <div className="go_next_image">
                                <ResponsiveImage src={imageUrl?.homePage?.section10?.two} onClick={handleSubmit} />
                                {/* {loading && <p>Please wait, processing...</p>} */}
                            </div>
                            : 
                            null
                        }

                    </div>
                </div>
                <div id="chat_container">
                    {messages.map((message, index) => (
                        <ChatMessage key={index} isAi={message.isAi} value={message.value} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Chatbot