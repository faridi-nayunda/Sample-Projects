import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/faridi.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer with over a decade of proffessional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passioon for frontend development is not only reflected in my extensive experience but also in the enthuasism and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>Laravel</p><hr style={{width: "50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>

    </div>
  )
}

export default About