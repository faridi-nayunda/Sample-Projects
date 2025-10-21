import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import my_logo from '../../assets/my_logo.png'
// import { FaBars,FaTimes } from "react-icons/fa";
// import underline from '../../assets/nav_underline.svg'

function Navbar() {

  const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img src={my_logo} alt="my-logo" className='navbar-img' />
        <ul className="nav-menu">
            <li><Link className="anchor-link" to="home"><p onClick={()=>setMenu("home")} className={menu === "home" ? "nav-style" : "default-style"}>Home</p></Link></li>
            <li><Link className="anchor-link" offset={-150} smooth={true} duration={500} to="about"><p onClick={()=>setMenu("about")} className={menu === "about" ? "nav-style" : "default-style"}>About Me</p></Link></li>
            <li><Link className="anchor-link" offset={-150} smooth={true} duration={500} to="services"><p onClick={()=>setMenu("services")} className={menu === "services" ? "nav-style" : "default-style"}>Services</p></Link></li>
            <li><Link className="anchor-link" offset={-150} smooth={true} duration={500} to="work"><p onClick={()=>setMenu("work")} className={menu === "work" ? "nav-style" : "default-style"}>Porfolio</p></Link></li>
            <li><Link className="anchor-link" offset={-150} smooth={true} duration={500} to="contact"><p onClick={()=>setMenu("contact")} className={menu === "contact" ? "nav-style" : "default-style"}>Contact</p></Link></li>
        </ul>
        <div className="nav-connect"><Link className="anchor-link" offset={-150} smooth={true} duration={500} to="contact">Connect With Me</Link></div>
    </div>
  )
}

export default Navbar