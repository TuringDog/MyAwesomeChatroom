import React, {useEffect, useState} from 'react';
// import React from 'react';


// async function fetchRoomList(){
//     const apiUrl = 'https://127.0.0.1:8000/api/rooms/'
//     fetch(apiUrl)
//         .then((response) => response.json())
//         .then((data)=>{
//             console.log(data);
//             return data;
//         });

// }

export default function RoomList(){
    const [roomList, setRoomList] = useState(undefined);
    
    useEffect(()=>{
        const fetchData = async () => {
            const url = 'http://127.0.0.1:8000/api/rooms/'
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setRoomList(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    },[roomList]);

    return (
        <div>
        <div>ROOM LIST</div>
        {/* <div>{roomList[0].name}</div> */}
        </div>
    );
}