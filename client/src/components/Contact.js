import React, {Component} from 'react'

class Contact extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            message: '',
        }
        this.onFormChange=this.onFormChange.bind(this)
    }

    onFormChange = event =>{
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = async (event) => {
        event.preventDefault()
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        await fetch('', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            response.json()
        })
        this.setState({
            name: '',
            email: '',
            message: '',
        })
    }

    render(){
        return(
            <div className='contact'>
                <div className='contactInfo'>
                    <h2>Contact</h2>
                    <p>Contact for more information, pricing, scheduling.</p>
                </div>
                <form onSubmit={this.onFormSubmit}>
                    <div className='contactName'>
                        <label htmlFor='name'>Name:</label>
                        <br />
                        <input
                            id='contactName'
                            label='name'
                            type='string'
                            name='name'
                            onChange={this.onFormChange}
                        />
                    </div>

                    <div className='contactEmail'>
                        <label htmlFor='email'>Email:</label>
                        <br />
                        <input 
                            id='contactEmail'
                            label='email'
                            type='string'
                            onChange={this.onFormChange}
                        />
                    </div>

                    <div className='contactMsg'>
                        <label htmlFor='message'>Message:</label>
                        <br />
                        <input 
                            id='contactMsg'
                            label='message'
                            type='text'
                            onChange={this.onFormChange}
                        />
                    </div>

                    <div className='contactButton'>
                        <button 
                            id='contactButton'
                            type='submit'
                            value='submit'
                            text='Send'
                        >Send</button>
                    </div>

                </form>
            </div>
        )
    }
}
export default Contact