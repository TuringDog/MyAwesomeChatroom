import React, {useEffect, useState} from 'react';
import RoomCard from './RoomCard'
// import React from 'react';


async function getRoomListFromApi(){
    const url = 'http://127.0.0.1:8000/api/rooms/'
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

export default function RoomList(){
    const [roomList, setRoomList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getRoomList(){
            const roomListFromApi = await getRoomListFromApi();
            console.log("room List",roomListFromApi);
            setRoomList(roomListFromApi);
            setIsLoading(false);
        }
        getRoomList().catch(console.error);
        
    },[roomList]);

    const cards=roomList?.map(item=>{
        return (
            <RoomCard 
                name={item.name}
                description={item.description}
                id={item.id}
            />
        )
    })
    

    return isLoading ? (<h1>Loading</h1>) : (
        <div>
            {cards}
        </div>
    );
}