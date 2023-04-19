import React from 'react'
import gasopt from '../../images/gassopt.svg'
import frtlogo from '../../images/frtlogo.svg'
import cavdicon from '../../images/cavdicon.svg'
import { Link } from 'react-router-dom'

const Katana = () => {
  return (
    <>
      <div id="katana">

      </div>
      <div className='katana'>
        <div className="k1">
          <div className="headk1">
            <div>
              <span className="headk11">P2P </span><span className="headk12">&nbsp;AuditKatana</span>
            </div>
            <div className='prodesc'>
              Product<br /> Description:
            </div>
          </div>
          <div className="gasopt">
            <img src={gasopt} alt="gas optimization" className='gasicon' />
            <div>
              <div className="headkatana"><span className="blue"> Gas </span>Optimisation:</div>
              <div className="desckatana">Our BOT service can save you thousands of dollars in gas fees by making your Smart Contract more gas efficient.</div>
            </div>
          </div>
        </div>
        <div className="k2">
          <div className="katanadescription">
            Our Auditkatana is a tool , designed to help identify 100+ smart contract bugs and gas optimisation issues. It can also provide suggestions for improving the code to make it more secure.<br /><br />
            <span className="blue"> AuditKatana Key Features:</span><br /><br />
            Automatic code analysis: The bot could automatically scan the smart contract's code for known vulnerabilities, such as reentrancy attacks or integer overflows.<br /><br />
            Customizable rule sets: It can allow users to specify custom rule sets or best practices to check for compliance with industry standards.
          </div>
          <div className="frt">
            <img src={frtlogo} alt="fast response time" className='frticon' />
            <div>
              <div className="headkatana">Fast Response <span className="blue"> Time:</span></div>
              <div className="desckatana desckatanafrt"> Our lightning-fast response time ensures that your report will be delivered within few hours, providing you with peace of mind and allowing you to take advantage of the latest opportunities quickly and effortlessly.</div>
            </div>
          </div>
        </div>
        <div className="k3">
          <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} to="/katana" className="katanabtn">AUDIT $199</Link>
          <div className="cavd">
            <img src={cavdicon} alt="Common Attack Vectors Detection" className='cavdicon' />
            <div>
              <div className="headkatana">Common <span className="blue"> Attack</span> Vectors Detection:</div>
              <div className="desckatana desckatanafrt"> With over 100+ security checkers, we provide comprehensive coverage for conventional security vulnerabilities and tokenomic loopholes.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Katana;