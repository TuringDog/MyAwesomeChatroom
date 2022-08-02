import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom'
import './Navbar.css'
import reactLogo from '../assets/react.svg'

export default function Navbar(){

    return (
        <div className='Navbar'>
            <Link to="/home/">
                <img src={reactLogo} className="logo" alt="React logo" />
            </Link>
            <h3>Location 1</h3>
            <h3>Location 2</h3>
            <form method='POST'>
                <input type="text" name="keyWords" placeholder='Search for fun...' />
                <input type='submit' value='Search' />
            </form>
            <div>

            </div>
        </div>
    )
}
