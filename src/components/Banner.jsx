import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {

  const navigate = useNavigate();
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleNavLinkClick = async (path, id) => {
    navigate(path);
    await delay(100);
    document.getElementById(id).scrollIntoView();
  };

  return (
    <div className='banner'>
      <div className="bannerdesc">
        Introducing P2P &nbsp; <span className="bannerhighlight"> AUDITKATANA:</span> &nbsp;A tool , designed to help identify 100+ smart contract bugs and gas optimisation issues
      </div>
      <div onClick={() => handleNavLinkClick("/katana", "katana")} className="bannerbtn">
        <Link>Learn more →</Link>
      </div>
    </div>
  )
}

export default Banner;