import React, {Component} from 'react'

function About(){
    return(
        <div className='about'>
            <div className='nameContain'>
                <div className='name'>Joel Soren</div>
                <div className='title'>Technical Director</div>
                <div className='title'>Freelance Theatrical Artist</div>
            </div>
            <div className='aboutContain'>
                <img src='#' alt='headshot'/>
                <div className='aboutContact'>
                    <div className='brand'>
                    Freelance theatrical artist with experience in design, lighting, carpentry, directing.
                    </div>
                    <a href="mailto:joelsoreng@gmail.com">Email</a> 
                    {/* https://stackoverflow.com/questions/47718289/view-download-pdf-files-in-react-router-4 */}
                    <a href='#'>Resumé</a>
                    <a href='https://www.linkedin.com/in/joelsoren/'>LinkedIn</a>
                </div>
            </div>
        </div>
    )
}
export default About