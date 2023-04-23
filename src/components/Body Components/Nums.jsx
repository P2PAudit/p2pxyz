import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Nums = () => {

  const [counteron, setCounteron] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(false)} className='nums'>
      <div className="cardnum">
        <div className="head">
          ${counteron && <CountUp start={0} end={10} duration={1.8} delay={0.4}/>}Bn+
        </div>
        <div className="desc">
          Blockchain<br/> Integrations
        </div>
      </div>
      <div className="cardnum">
        <div className="head">
          {counteron && <CountUp start={0} end={63} duration={1.8} delay={0.4}/>}
        </div>
        <div className="desc">
          Projects<br /> audited
        </div>
      </div>
      <div className="cardnum">
        <div className="head">
          ${counteron && <CountUp start={0} end={8} duration={1.8} delay={0.4}/>}Mn+
        </div>
        <div className="desc">
          Amount<br/> protected
        </div>
      </div>
      <div className="cardnum">
        <div className="head">
        {counteron && <CountUp start={0} end={145} duration={1.8} delay={0.4}/>}+
        </div>
        <div className="desc">
          Critical/high/<br />medium Findings
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default Nums;