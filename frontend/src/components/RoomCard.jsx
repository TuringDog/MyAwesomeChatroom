import React from "react"
import { useSpring, animated } from 'react-spring'

export default function RoomTag({name, description, id}){

    return (
        <div>
            <img src='' className=''/>
            <a href={"room/"+id}>{id}. {name}</a>
            <p>{description}</p>
        </div>
    )
}