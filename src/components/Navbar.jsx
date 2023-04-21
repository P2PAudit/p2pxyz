import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icon1 from '../images/icon1.svg'

const Navbar = () => {

  const navigate = useNavigate();
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleNavLinkClick = async (path, id) => {
    navigate(path);
    await delay(100);
    document.getElementById(id).scrollIntoView();
  };

  return (
    <div className='navbar' id='#navbar'>
      <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/"><img src={icon1} alt="icon1" /></Link>
      <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/" className='title'>P2PAUDIT.XYZ</Link>
      <a href='https://calendly.com/sm4rty/30min' target='_blank' className="navbtn"><div>Book free <br/> Consultation</div></a>
      <div className="navflex">
        <div><Link to="https://p2paudit.gitbook.io/" target='_blank'>About Us</Link></div>
        <div><Link to="https://p2paudit.medium.com/" target='_blank'>Blog</Link></div>
        <div onClick={() => handleNavLinkClick("/services", "services")}><Link>Services</Link></div>
        <div><Link to="https://github.com/P2PAudit/portfolio" target='_blank'>Portfolio</Link></div>
        <div><Link to="https://github.com/P2PAudit/P2PSchool" target='_blank'>Education</Link></div>
      </div>
    </div>
  )
}

export default Navbar