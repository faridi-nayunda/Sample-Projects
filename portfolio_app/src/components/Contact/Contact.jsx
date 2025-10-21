import React from 'react'
import './Contact.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import email_icon from '../../assets/email_icon.svg'
import new_email_icon from '../../assets/new_email_icon.svg'
// import location_icon from '../../assets/location_icon.svg'
import new_location_icon from '../../assets/new_location_icon.svg'
// import call_icon from '../../assets/call_icon.svg'
import new_call_icon from '../../assets/new_call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0e9f4313-4fec-48e0-b414-ba47612e2973");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            {/* <img src="" alt="theme_pattern" /> */}
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={new_email_icon} alt="email_icon" /> <p>faridisuleimani076@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                         <img src={new_call_icon} alt="call_icon" /> <p>+255-684-005-606</p>

                    </div>
                    <div className="contact-detail">
                         <img src={new_location_icon} alt="location_icon" /> <p>Dar es salaam, Tanzania</p>

                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter your name' name="name" />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>

            </form>
        </div>
    </div>
  )
}

export default Contact