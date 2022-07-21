import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './Navbar.css'
import reactLogo from '../assets/react.svg'

export default function Navbar(){

    return (
        <div className='Navbar'>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h3>Location 1</h3>
            <h3>Location 2</h3>
        </div>
    )
}
