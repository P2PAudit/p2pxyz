import React from 'react'
import sheild from '../../images/what we do/sheild.svg'
import opoint from '../../images/what we do/1point.svg'
import oicon from '../../images/what we do/1icon.svg'
import tpoint from '../../images/what we do/2point.svg'
import tbg from '../../images/what we do/2bg.svg'
import thbg from '../../images/what we do/3bg.svg'

const WWD = () => {
  return (
    <div className='whatwedomain' id="services"> 
      <div className='wwd1'>
        <div className="whatwedo">
          <div className="wwdtitle">
            What we do
          </div>
          <div className="wwddesc">
          P2PAudit is a company in the field of Web3 security that is committed to providing excellent protection and education to its partners and their projects.<br /><br />
          The primary objective of the company is to establish a secure, dependable, and transparent ecosystem for all individuals involved in Web3 and DeFi.
          </div>
        </div>
        <div className="sheild">
          <img src={sheild} alt="sheild" className='sheildicon'/>
        </div>
      </div>

      <div className="wwd2">
        <div className='opointbox'>
          <div className='wwd2head'>
            <div className="point">
              <img src={opoint} alt="opoint" className='imagefill'/>
            </div>
            <div className="opoint">
              <div className="opointtitle">
                Smart contract audits
              </div>
              <div className="opointicon">
                <img src={oicon} alt="oicon" className='imagefill'/>
              </div>
            </div>
          </div>
          <div className='opointbg'>
            <div className="opointdesc">
              Our auditors work with your developers to understand your project. We go line by line to secure your code, so you feel confident to push your code into the wild.
            </div>
            <div className="opointbtn">
              <div className="requestauditbtn">Request an audit</div>
            </div>
          </div>
        </div>

        <div className='tpointbox'>
          <div className='wwd2head'>
            <div className="tpoint">
              <div className="tpointtitle">
                Code Reviews
              </div>
              <div className="tpointicon">
                <img src={tpoint} alt="tbg" />
              </div>
            </div>
          </div>
          <div className="tpointcontent">
            <div>
              <div className="tpointdesc">
                A code review is a great way to confirm you're building in the right direction, with the right tech stack, and making use of cost-savings. It supplies you with the understanding needed to prepare for a full security audit.
              </div>
              <div className="tpointbtn">
                Request Code Review
              </div>
            </div>
            <div className="tpointbg">
              <img src={tbg} alt="tbg" />
            </div>
          </div>
        </div>
      </div>

      <div className="wwd3">
        <div className="thpointcontent">
          <div className="thpointtitle">
            3. Wallet Security Audit
          </div>
          <div className="thpointdesc">
            Wallet extension and app penetration testing audit involve a comprehensive analysis of the wallet's security, including its encryption methods, authentication processes, and communication protocols.
          </div>
          <div className="thpointbtn">
            Request Wallet audit
          </div>
        </div>
        <div className="thpointbg">
          <img src={thbg} alt="thbg" />
        </div>
      </div>
    </div>
  )
}

export default WWD;