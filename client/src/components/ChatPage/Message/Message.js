import React from "react";

export const Message = ({message, own}) => {
    return (
        <div className="messageInChat">
            <div className={`message ${own ? "own" : ""}`}>{message.text}</div>
        </div>
    );
}