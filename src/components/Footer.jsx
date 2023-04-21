import React from 'react'
import msgbox from '../images/footer/msgbox.svg'
import arrow1 from '../images/footer/arrow1.svg'
import arrow2 from '../images/footer/arrow2.svg'

const Footer = () => {
  return (
    <div>
      <div className="bgblur">
        <div className="footertitle">
          Get your free consultation
        </div>
        <div className="footerdesc">
          Email, Zoom, pigeon-mail... it doesn't matter to us. Contact us now and get your free consultation in whichever way you prefer.
        </div>
        <a className="footbtn1" href="mailto:request@p2paudit.xyz">
          <div>request@p2paudit.xyz</div> 
          <img src={msgbox} alt="msgbox" className='footicon' />
        </a>
        <div className="footbtn">
          <a href='https://calendly.com/sm4rty/30min' target='_blank' className="footbtn2">
            <div>Book free<br /> Consultation</div> 
            <img src={arrow1} alt="arrow" className='footicon' />
          </a>
          <a href='https://github.com/P2PAudit/Our-Experts' target='_blank' className="footbtn3">
            <div>Learn Web3 from<br /> our Experts</div> 
            <img src={arrow2} alt="arrow" className='footicon' />
          </a>
        </div>
      </div>
      <div className="border1"></div>
      <div className="footbtnsection">
        <div className="openorg">An open organization</div>
        <a className="medialink" href='https://twitter.com/p2pAudit' target="_blank">Twitter</a>
        <a className="medialink" href='https://discord.gg/4DFQME6KxS' target="_blank">Discord</a>
        <a className="medialink" href='https://github.com/P2PAudit' target="_blank">GitHub</a>
        <a className="medialink" href='https://p2paudit.medium.com' target="_blank">Medium</a>
        <a className="medialink" href='https://t.me/p2p_audit' target="_blank">Telegram</a>
        <a className="medialink" href='https://www.youtube.com/@P2PAudit' target="_blank">Youtube</a>
      </div>
      <div className="border2"></div>
      <div className="rights">© 2023 P2PAudit ®. All rights reserved.</div>
    </div>
  )
}

export default Footer