import React from 'react'
import { Link } from 'react-router-dom'

const KickOff = () => {
  return (
    <div className="kickoff">
      <div className="kickoffcontent">
        <div className="kick1">
          Ready To Secure Your Contracts?
        </div>
        <div className="kick2">
          There's no better moment to safeguard your project than the present.
        </div>
        <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/requestform" className="kickbtn">
          Let’s Kick Off
        </Link>
      </div>
    </div>
  )
}

export default KickOff;