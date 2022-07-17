import React, {useEffect, useState} from 'react';
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
        
    },[]);

    return isLoading ? (<h1>Loading</h1>) : (
        <div>
        <div>ROOM LIST</div>
        <div>First Room Name</div>
        <div>{roomList[0]?.name}</div>
        </div>
    );
}