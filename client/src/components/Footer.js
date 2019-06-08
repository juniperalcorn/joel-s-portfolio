import React, {Component} from 'react'
import {gitlogo} from '../assets/GitHub-Mark-Light-32px.png'

function Footer(){
    return(
        <div className='footer'>
            <div>Website &copy; Juniper Alcorn, 2019</div>
            <a href='https://github.com/juniperalcorn'>
                <img className='logo' src={gitlogo}></img>
            </a>
        </div>
    )
}

export default Footer