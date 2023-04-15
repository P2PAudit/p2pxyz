import React from 'react'
import coin from '../../images/coin.svg'

const Main = () => {
  return (
    <div className='mainblock'>
      <div className='main'>
        <div className="main1">Maximize security and<br/><span className="pink"> minimize</span> costs -</div>
        <div className="main2">Empowering your decentralized dreams with expert<br /> audits and Web3 Security.</div>
        <div className="main3">P2PAudit helps Web3 projects meet <span className="pink2"> world leading<br /> independent security experts </span></div>
        <div className="main4">
          <div className="applyaudit">Apply as an Auditor</div>
          <div className="requestaudit">Request an audit</div>
        </div>
      </div>
      <img src={coin} alt="coin" className='coin' />
    </div>
  )
}

export default Main;