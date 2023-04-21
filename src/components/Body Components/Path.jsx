import React from 'react'
import path from '../../images/path.svg'
import { Link } from "react-router-dom"

const Path = () => {
  return (
    <div className='pathmain'>
      <img src={path} alt="path" className='path'/>
      <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/requestform" className="pathbtn"><div className="requestauditbtn">Request an audit</div></Link>
    </div>
  )
}

export default Path;