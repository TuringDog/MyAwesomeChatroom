import React from "react";
import RoomList from "../../components/RoomList";
import TopicList from "../../components/TopicList";
import MessageList from "../../components/messageList";
import Navbar from "../../components/Navbar";

import './home.css'

export default function HomePage(){
    return (
        <div>
            <div>
                <Navbar />
                <h1>Welcome to Turing Dog</h1>
            </div>
            <div className="home-content">
                <div>
                    <h3>Hot Topics</h3>
                    <TopicList />
                </div>
                <div>
                    <h3>Rooms</h3>
                    <RoomList />
                </div>
                <div>
                    <h3>Just Happened</h3>
                    <MessageList />
                </div>
            </div>
            
        </div>
    );
}