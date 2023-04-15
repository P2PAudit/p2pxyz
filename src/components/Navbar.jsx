import React from 'react'
import icon1 from '../images/icon1.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={icon1} alt="icon1" />
      <div className='title'>P2PAUDIT.XYZ</div>
      <div className="navbtn"><div>Book free <br/> Consultation</div></div>
      <div className="navflex">
        <div>About Us</div>
        <div>Blog</div>
        <div>Services</div>
        <div>Portfolio</div>
        <div>Education</div>
      </div>
    </div>
  )
}

export default Navbar