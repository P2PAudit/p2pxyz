import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icon1 from '../images/icon1.svg'

const Navbar = () => {

  const navigate = useNavigate();
  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
  }

  const handleNavLinkClick = async (path, id) => {
    navigate(path);
    await timeout(100);
    document.getElementById(id).scrollIntoView();
  };

  return (
    <div className='navbar' id='#navbar'>
      <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/"><img src={icon1} alt="icon1" /></Link>
      <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/" className='title'>P2PAUDIT.XYZ</Link>
      <div className="navbtn"><div>Book free <br/> Consultation</div></div>
      <div className="navflex">
        <div>About Us</div>
        <div>Blog</div>
        <div onClick={() => handleNavLinkClick("/", "services")}><Link>Services</Link></div>
        <div>Portfolio</div>
        <div>Education</div>
      </div>
    </div>
  )
}

export default Navbar