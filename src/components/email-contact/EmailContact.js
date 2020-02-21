import React from 'react'

import './email-contact.styles.css' 

const EmailContact = () => {
    return (
        <div className='email-contact-main'>
            <div>
                <p className='header'>Come See Us.</p>
                <p className='info'>Have questions or want to learn more about the Fix Gym?</p>
                <p className='info'>Come visit us at our main site!</p>
            </div>
            <div className='btn-container'>
                <form target='_blank' rel='noopener noreferrer' action='https://thefixgym.com'>
                    <button className='mainsite-btn'>The Fix Gym</button>
                </form>
            </div>
        </div>
    )
}

export default EmailContact