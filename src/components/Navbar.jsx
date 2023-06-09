import React , { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icon1 from '../images/icon1.svg'

const Navbar = () => {

  const navigate = useNavigate();
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleNavLinkClick = async (path, id) => {
    navigate(path);
    await delay(200);
    document.getElementById(id).scrollIntoView();
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={isOpen ? "visible sidenav" : "hidden"}>
        <div className='cross' onClick={() => { handleMenuClick(); }}>
          <div className="crossbar"></div>
          <div className="crossbar"></div>
          <div className="crossbar"></div>
        </div>
        <a href='https://calendly.com/p2p-audit/30min' target='_blank' className="sidenavbtn"><div>Book free <br/> Consultation</div></a>
        <div className="sidenavflex">
          <div><Link to="https://p2paudit.gitbook.io/" target='_blank'>About Us</Link></div>
          <div><Link to="https://p2paudit.medium.com/" target='_blank'>Blog</Link></div>
          <div onClick={() => handleNavLinkClick("/services", "services")}><Link>Services</Link></div>
          <div><Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/reports">Reports</Link></div>
          <div><Link to="https://github.com/P2PAudit/P2PSchool" target='_blank'>Education</Link></div>
        </div>
      </div>
      <div className='navbar' id='#navbar'>
        <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/"><img src={icon1} alt="icon1" /></Link>
        <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/" className='title'>P2PAUDIT.XYZ</Link>
        <a href='https://calendly.com/p2p-audit/30min' target='_blank' className="navbtn"><div>Book free <br/> Consultation</div></a>
        <div className='cross' onClick={() => { handleMenuClick(); }}>
          <div className="crossbar"></div>
          <div className="crossbar"></div>
          <div className="crossbar"></div>
        </div>
        <div className="navflex">
          <div><Link to="https://p2paudit.gitbook.io/" target='_blank'>About Us</Link></div>
          <div><Link to="https://p2paudit.medium.com/" target='_blank'>Blog</Link></div>
          <div onClick={() => handleNavLinkClick("/services", "services")}><Link>Services</Link></div>
          <div><Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/reports">Reports</Link></div>
          <div><Link to="https://github.com/P2PAudit/P2PSchool" target='_blank'>Education</Link></div>
        </div>
      </div>
    </>
  )
}

export default Navbar