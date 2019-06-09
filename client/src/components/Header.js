import React, {Component} from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div className='header'>
            <h1>Joel Soren</h1>
            <div className='nav'>
                <Link to='/'>Home</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/services'>Services</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    ) 
}
export default Header;