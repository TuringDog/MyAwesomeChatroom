import React from "react"
import { useSpring, animated } from 'react-spring'

import './RoomCard.css'

export default function RoomCard({name, description, id}){

    return (
        <div className="card">
            <img src='' className='roomLogo'/>
            <div className="info">
                <h3>{id}. {name}</h3>
                <p>{description}</p>
            </div>
            <a href={"/room/"+id}>
                <button className="roomEntrance" type="button">Launch!</button>
            </a>
        </div>
    )
}