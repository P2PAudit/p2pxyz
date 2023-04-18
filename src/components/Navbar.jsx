import React from 'react'
import icon1 from '../images/icon1.svg'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar' id='#navbar'>
      <Link to="/"><img src={icon1} alt="icon1" /></Link>
      <Link to="/" className='title'>P2PAUDIT.XYZ</Link>
      <div className="navbtn"><div>Book free <br/> Consultation</div></div>
      <div className="navflex">
        <div>About Us</div>
        <div>Blog</div>
        <div><a href="#services">Services</a></div>
        <div>Portfolio</div>
        <div>Education</div>
      </div>
    </div>
  )
}

export default Navbar