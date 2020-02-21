import React from 'react'

import './footer.styles.css'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='container-1'>
                <span className='footer-logo'>+</span>
                <p className='title'> My Fix Gym</p>
                <p className='copyright'>&#169; 2020 My Fix Gym</p>
            </div>
            <div className='container-2'>
                <div className='links-1'>
                    <p className='helpful-links'>Helpful Links</p>
                    <a target='_blank' rel='noopener noreferrer' href='https://thefixgym.com/'>The Fix Gym</a>
                    <br/>
                    <a target='_blank' rel='noopener noreferrer' href='https://thefixgym.com/meet-tiger/'>Meet Tiger</a>
                    <br/>
                    <a target='_blank' rel='noopener noreferrer' href='https://thefixgym.com/personal-training-success-stories-2/'>Success Stories</a>
                    <br/>
                    <a className='CHANGE' target='_blank' rel='noopener noreferrer' href='https://thefixgym.com/personal-training-success-stories-2/'>Privacy</a>
                    <br/>
                    <a target='_blank' rel='noopener noreferrer' href='https://thefixgym.com/how-our-personal-training-works/'>How Our Program Works</a>
                    <br/>
                    <a target='_blank' rel='noopener noreferrer' href='https://meetings.hubspot.com/tiger3'>Setup a Meeting</a>
                    <br/>
                    <a className='CHANGE' target='_blank' rel='noopener noreferrer' href='https://meetings.hubspot.com/tiger3'>Terms</a>
                    <br/>
                    <a className='CHANGE' target='_blank' rel='noopener noreferrer' href='https://meetings.hubspot.com/tiger3'>Disclaimer</a>
                </div>
                <div className='links-2'>
                    <a target='_blank' rel='noopener noreferrer' href='https://thefixgym.com/hiring-personal-trainers/'>Join Our Team</a>
                    <br/>
                    <a className='CHANGE' target='_blank' rel='noopener noreferrer' href='https://thefixgym.com/hiring-personal-trainers/'>FAQ</a>
                    <br/>
                    <a target='_blank' rel='noopener noreferrer' href='https://thefixgym.com/the-fix-gym-is-right-for-you/'>Is The Fix Right For Me?</a>
                    <br/>
                    <a target='_blank' rel='noopener noreferrer' href='https://thefixgym.com/the-fix-life-blog/'>Blog</a>
                    <br/>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/TheFixGym/'>Facebook</a>
                    <br/>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/TheFixGym/'>Instagram</a>
                    <br/>
                    <a target='_blank' rel='noopener noreferrer' href='https://vimeo.com/thefixgym'>Vimeo</a>
                    <br/>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.yelp.com/biz/the-fix-gym-marina-del-rey-3'>Yelp</a>
                </div>
            </div>
            <div className='container-3'>
                <div className='footer-contact'>
                    <p className='contact-header'>Contact</p>
                    <span className='contact-method'>Phone:</span><span className='contact-info'>(310) 734-0511</span>
                    <br/>
                    <span className='contact-method'>Email:</span><span className='contact-info'>Tiger@thefixgym.com</span>
                    <br/>
                    <span className='contact-method'>Address:</span><span className='contact-info address'>4133 RedWood Ave. #1006</span>
                    <br/> 
                    <span className='mailing-continued contact-info'>Los Angeles, CA 90066</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer