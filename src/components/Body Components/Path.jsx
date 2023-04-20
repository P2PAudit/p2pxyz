import React from 'react'
import path from '../../images/path.svg'

const Path = () => {
  return (
    <div className='pathmain'>
      <img src={path} alt="path" className='path'/>
      <div className="pathbtn"><div className="requestauditbtn">Request an audit</div></div>
    </div>
  )
}

export default Path;