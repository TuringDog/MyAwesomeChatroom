import React from "react";
import {useParams} from "react-router-dom"

import Navbar from "../../components/Navbar";
import MessageList from "../../components/messageList";
import InputBox from "../../components/inputBox";

import './room.css'

export default function Room(){
    const {id}=useParams()
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="panel">
                <div className="messageWindow">
                    <div className="messageDisplay">
                        <MessageList id={id} />
                    </div>
                    <div className="messageInput">
                    <InputBox Avatar="blablabla" />
                    </div>
                </div>
                <div className="participants">
                    <h3>Participants:</h3>
                </div>
            </div>
        </div>
    )
}