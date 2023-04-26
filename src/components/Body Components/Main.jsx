import React from 'react'
import coin from '../../images/coin.svg'
import {Link} from "react-router-dom"

const Main = () => {
  return (
    <div className='mainblock'>
      <div className='main'>
        <div className="main1">Maximize security<br/><span className="pink">Minimize</span> costs</div>
        <div className="main2">Empowering your decentralized dreams with expert<br /> audits and Web3 Security.</div>
        <div className="main3">P2PAudit helps Web3 projects meet <span className="pink2"> world leading<br /> independent security experts </span></div>
        <div className="main3mobile">P2PAudit helps Web3 projects meet <span className="pink2"><br /> world leading independent security<br /> experts </span></div>
        <div className='coinmobile'>
          <img src={coin} alt="coin" className='coinimagemobile' />
        </div>
        <div className="main2mobile">Empowering your decentralized<br /> dreams with expert audits and Web3<br />  Security.</div>
        <div className="main4">
          <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/auditorform" className="applyaudit">Apply as an Auditor</Link>
          <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/requestform" className="requestaudit"><div className="requestauditbtn">Request an audit</div></Link>
        </div>
      </div>
      <div className='coin'>
        <img src={coin} alt="coin" className='coinimage' />
      </div>
    </div>
  )
}

export default Main;