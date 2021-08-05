import React from 'react'
import './ChatPage.css'
import Header from '../Header'
import { Link } from 'react-router-dom'


const userChats = [
    {userName: 'Alisa Govrova', status: 'trainer', image: '/profile.jpg'},
    {userName: 'Alisa Govrova', status: 'trainer', image: '/profile.jpg'},
    {userName: 'Alisa Govrova', status: 'trainer', image: '/profile.jpg'},
    {userName: 'Alisa Govrova', status: 'trainer', image: '/profile.jpg'},
]

const ChatPage = () => {
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
                        <img className="user-image" src="/profile.jpg" />
                        <span className="user-name">Мой профиль</span>
                    </div>
                </div>
                <ul className="chat-users__list" id="users-list">
                    {
                        userChats.map((user) => {
                            return(
                                <li className="username-chat">
                                    <img className="user-image-other" src={user.image} />
                                    <div className="chat-flex-col">
                                        <span className="user-name">{user.userName}</span>
                                        <span className="user-status">{user.status}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="chat-page-second">
                <Header />
                <div id="chatAndMessage">
                    <span className="message-date">Сегодня</span>
                    <div class="messageInChat">
                        <div class="messageClient">Здравствуйте, Вероника. Когда будет готов наш заказ
                            <span className="time">21:00</span>
                        </div>
                        
                    </div>
                    <div class="messageInChat">
                        <div class="messageManager">Здравствуйте, Вероника. Когда будет готов наш заказ
                            <span className="time">21:00</span>    
                        </div>
                        
                    </div>
                    
                </div>
                <div className="chat-form">
                    
                </div>
            </div>
        </div>
    )
}


export default ChatPage