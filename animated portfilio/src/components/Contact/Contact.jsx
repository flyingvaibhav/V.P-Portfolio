import React from 'react'
import con from '../../assets/contact.png'
import './Contact.css'

function Contact() {
  return (
    <div id='contact'>
        <div className='leftcontact'>
            <img src={con} alt="" />
        </div>
        <div className='rightcontact'>
            <form action="https://formspree.io/f/manppgrz" method='POST'>
                <input name='username' type="text" placeholder='Enter your name' />
                <input name='email' type="email" placeholder='Enter your email' />
                <textarea name='message ' id='textarea' placeholder='Enter your message'></textarea>
                <input type="submit" id='btn' value='Submit' />
            </form>
        </div>
    </div>
  )
}

export default Contact