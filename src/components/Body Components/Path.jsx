import React from 'react'
import path from '../../images/path.svg'

const Path = () => {
  return (
    <div className='pathmain'>
      <img src={path} alt="path" className='path'/>
      <div className="pathbtn">Request an audit</div>
    </div>
  )
}

export default Path;