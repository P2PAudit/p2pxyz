import React from 'react'
import ut from '../../images/Other services/ut.svg'
import arr from '../../images/Other services/arr.svg'
import tla from '../../images/Other services/tla.svg'

const OS = () => {
  return (
    <div className='osmain' id="services">
      <div className="os1">
        <div className="oshead">
          Other Services
        </div>
        <div className="utbox">
          <div className="uttitle">
            &bull; Unit Testing
          </div>
          <div className="utbody">
            <div className="utdesc">
              Our Unit Testing service will help you develop robust applications by writing automated unit tests that verify your application behaves exactly as you intended.
            </div>
            <div className="utbg">
              <div className="utbgicon">
                <img src={ut} alt="utbgicon" />
              </div>
              <div className="utbtn">
                Request
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="os2">
        <div>
          <div className="arr">
            <div className="arrtitle">
              &bull; Audit Readiness Review
            </div>
            <div className="arrbody">
              <div>
                <div className="arrdesc">
                  Our Audit Readiness review, conducted by experts, will assist project owners in comprehensively preparing for an audit and getting the most out of it.
                </div>
                <div className="arrbtn">
                    Request Review
                </div>
              </div>
              <div className="arrbg">
                <div className="arrbgicon">
                  <img src={arr} alt="arrbgicon" />
                </div>
              </div>
            </div>
          </div>
          <div className="tla">
            <div className="tlatitle">
              &bull; Token Listing Assistance
            </div>
            <div className="tlabody">
              <div>
                <div className="tladesc">
                  We have extensive connections within the Web3 space, enabling us to assist you in getting your cryptocurrency listed on various crypto exchanges.
                </div>
                <div className="tlabtn">
                  Access Feature
                </div>
              </div>
              <div className="tlabg">
                <div className="tlabgicon">
                  <img src={tla} alt="tlabgicon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OS;