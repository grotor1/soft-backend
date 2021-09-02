import React, { useEffect, useState } from "react";
import {useMessage} from "../../../hooks/message.hook";
import {useHttp} from "../../../hooks/http.hook";

export const Conversation = ({ conversation, _id_user }) => {
    const [user, setUser] = useState(null);
    const message = useMessage()
    const {request, error, clearError} = useHttp()

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== _id_user);

        const getUser = async () => {
            try {
                const {data} = await request("/api/fetch/getUser/" + friendId, 'GET');
                setUser(data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [_id_user, conversation]);

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    return (
        <li className="username-chat">
            <img className="user-image-other" src={user?.img}/>
            <div className="chat-flex-col">
                <span className="user-name">{user?.name + " " + user?.surname}</span>
            </div>
        </li>
    );
}
