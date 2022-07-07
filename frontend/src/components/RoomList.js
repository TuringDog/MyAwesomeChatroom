import React, {useCallback, useEffect, useState} from 'react';
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

export default function  RoomList(){
    const [roomList, setRoomList] = useState(undefined);

    // const fetchRoomList = useCallback(()=>{
    //     const apiUrl = 'https://127.0.0.1:8000/api/rooms/'
    //     fetch(apiUrl)
    //         .then((response) => response.json())
    //         .then((data)=>{
    //             console.log(data);
    //             setRoomList(data);
    //         });
    //     },[]);
   
    
    useEffect(()=>{
        // const fetchData = async () => {
        //     const url = 'https://127.0.0.1:8000/api/rooms/'
        //     try {
        //         const response = await fetch(url);
        //         const json = await response.json();
        //         console.log(json);
        //         setRoomList();
        //     } catch (error) {
        //         console.log("error", error);
        //     }
        // };
        // const response = await fetchRoomList();
        // setRoomList(response);
        const url = 'http://127.0.0.1:8000/api/rooms/'
        fetch(url)
            .then((response) => response.json())
            .then((data)=>{
                console.log(data);
                setRoomList(data);
            });
        // fetchData();
    },[roomList]);

    return (
        <div>{roomList}</div>
    );
}