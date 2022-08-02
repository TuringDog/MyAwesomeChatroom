import React, {useEffect, useState} from 'react';

async function getMessageListFromApi(){
    const url = 'http://127.0.0.1:8000/api/messages/'
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

async function getRoomMessageFromApi(roomID){
    const url = 'http://127.0.0.1:8000/api/messages/'+roomID.toString()
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

export default function MessageList({id}){
    const [messageList, setMessageList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getMessageList(){
            const messageListFromApi = typeof id == 'undefined'? 
                await getMessageListFromApi() : await getRoomMessageFromApi(id);
            console.log("topic List",messageListFromApi);
            setMessageList(messageListFromApi);
            setIsLoading(false);
        }
        getMessageList().catch(console.error);
        
    },[messageList]);

    const messageCards=messageList?.map(item=>{
        return (
            <div>
                <p>{item.user} {item.updated}</p>
                <p>{item.body}</p>
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