import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"

async function getRoomMessageFromApi(roomID){
    const url = 'http://127.0.0.1:8000/api/profile/'+roomID.toString()
    try{
        const response = await fetch(url);
        const ReponseJson = await response.json();
        console.log(ReponseJson);
        return ReponseJson;
    } catch(error){
        console.log(error);
        return [];
    }

}

export default function MessageList(){
    const [messageList, setMessageList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    const {id}=useParams()

    useEffect(()=>{
        console.log("useEffect");
        async function getMessageList(){
            const messageListFromApi = await getRoomMessageFromApi(id);
            console.log("topic List",messageListFromApi);
            setMessageList(messageListFromApi);
            setIsLoading(false);
        }
        getMessageList().catch(console.error);
        
    },[messageList]);

    const messageCards=messageList?.map(item=>{
        return (
            <div>
                <h3>{item.profile.nickname}</h3>
                <hr />
            </div>
            
        )
    })
    

    return isLoading ? (<h1>Loading</h1>) : (
        <div>
            {messageCards}
        </div>
    );
}