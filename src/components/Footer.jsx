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
          <div className="footbtn2">
            <div>Book free<br /> Consultation</div> 
            <img src={arrow1} alt="arrow" className='footicon' />
          </div>
          <div className="footbtn3">
            <div>Learn Web3 from<br /> our Experts</div> 
            <img src={arrow2} alt="arrow" className='footicon' />
          </div>
        </div>
      </div>
      <div className="border1"></div>
      <div className="footbtnsection">
        <div className="openorg">An open organization</div>
        <div className="medialink">Twitter</div>
        <div className="medialink">Discord</div>
        <div className="medialink">GitHub</div>
        <div className="medialink">Medium</div>
        <div className="medialink">Telegram</div>
        <div className="medialink">Youtube</div>
      </div>
      <div className="border2"></div>
      <div className="rights">© 2023 P2PAudit ®. All rights reserved.</div>
    </div>
  )
}

export default Footer