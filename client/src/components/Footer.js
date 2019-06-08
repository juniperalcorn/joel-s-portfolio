import React, {Component} from 'react'
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <div className='footer'>
            <div>Website Juniper Alcorn, 2019</div>
            <a href='https://github.com/juniperalcorn'>
                <img src='./assets/GitHub-Mark-Light-32px.png'/>
            </a>
        </div>
    )
}

export default Footer