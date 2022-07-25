import React from "react";
import RoomList from "../../components/RoomList";
import TopicList from "../../components/TopicList";
import MessageList from "../../components/messageList";

import './home.css'

export default function HomePage(){
    return (
        <div>
            <h1>MY HOME PAGE</h1>
            <TopicList />
            <RoomList />
            <MessageList />
        </div>
    );
}