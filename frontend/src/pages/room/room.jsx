import React from "react";
import {useParams} from "react-router-dom"

import MessageList from "../../components/messageList";

import './room.css'

export default function Room(){
    const {id}=useParams()
    return (
        <div className="messageWindow">
            <MessageList id={id} />
        </div>
    )
}