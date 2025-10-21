import React from 'react'
import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import copyright_icon from '../../assets/copyright_icon.svg'
import my_logo from '../../assets/my_logo.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={my_logo} alt="footer_logo" />
                <p>I am frontend developer from Dar es salaam, Tanzania with 10 years of experience in multiple companies like Telesoft and e-Ga.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="user_icon" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left"><img src={copyright_icon} alt="" /> 2025 Faridi Khamisi. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer