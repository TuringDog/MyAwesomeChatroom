import React from "react";
import {useParams} from "react-router-dom"

import MessageList from "../../components/messageList";

export default function Room(){
    const {id}=useParams()
    return (
        <div>
            <MessageList id={id} />
        </div>
    )
}