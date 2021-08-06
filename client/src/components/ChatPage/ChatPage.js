import React, {useContext, useEffect, useRef, useState} from 'react'
import './ChatPage.css'
import Header from '../Header'
import {Link} from 'react-router-dom'
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {Conversation} from "./Conversation/Conversation";
import {Message} from "./Message/Message";

const ChatPage = () => {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const message = useMessage()
    const {request, error, clearError} = useHttp()
    const {_id_user} = useContext(AuthContext)
    const scrollRef = useRef()

    useEffect(() => {
        const getConversations = async () => {
            try {
                const {data} = await request("/api/fetch/getConversations/" + _id_user, 'GET');
                setConversations(data);
            } catch (e) {
            }
        };
        getConversations();
    }, [_id_user]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const {data} = await request("/api/fetch/getMessages/" + currentChat?._id);
                setMessages(data);
            } catch (e) {
            }
        };
        getMessages();
    }, [currentChat]);

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            _id_sender: _id_user,
            text: newMessage,
            _id_conversation: currentChat._id,
        };

        try {
            const {data} = await request("/api/fetch/createMessage", 'POST', message);
            setMessages([...messages, data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    return (
        <div className="chat-page">
            <div className="chat-page-first">
                <div className="chat-bar">
                    <div className="chat-flex">
                        <Link to='/profile'>
                            <button className="close-chat">
                                <img src="/arrow.svg"/>
                            </button>
                        </Link>
                        <h3 className="chat__heading">Мои чаты</h3>
                    </div>
                    <div className="chat-profile">
                        <img className="user-image" src="/profile.jpg"/>
                        <span className="user-name">Мой профиль</span>
                    </div>
                </div>
                <ul className="chat-users__list" id="users-list">
                    {conversations.map((c) => {
                        return (
                            <div onClick={() => setCurrentChat(c)}>
                                <Conversation conversation={c} _id_user={_id_user}/>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div className="chat-page-second">
                <Header/>
                <div id="chatAndMessage">
                    {messages.map((m) => {
                        return (
                            <div ref={scrollRef}>
                                <Message message={m} own={m._id_sender === _id_user}/>
                            </div>
                        )
                    })}
                </div>
                <div className="chat-form">
                    <input type="text" onChange={(e) => setNewMessage(e.target.value)} value={newMessage}/>
                    <button onClick={handleSubmit}>Отправить</button>
                </div>
            </div>
        </div>
    )
}


export default ChatPage