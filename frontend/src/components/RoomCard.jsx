import React from "react"
import { useSpring, animated } from 'react-spring'

export default function RoomTag({name, description, id}){

    return (
        <div>
            <img src='' className=''/>
            <div>
                <span>{name}</span>
            </div>
            <p>{description}</p>
            <p>{id}</p>
        </div>
    )
}