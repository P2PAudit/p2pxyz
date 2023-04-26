import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Nums = () => {

  const [counteron1, setCounteron1] = useState(false);
  const [counteron2, setCounteron2] = useState(false);
  const [counteron3, setCounteron3] = useState(false);
  const [counteron4, setCounteron4] = useState(false);

  return (
    <div className="nums">
      <ScrollTrigger onEnter={() => setCounteron1(true)} onExit={() => setCounteron1(false)} className="cardnum">
        <div className="head">
          ${counteron1 && <CountUp start={0} end={10} duration={1.8} delay={0.4} />}Bn+
        </div>
        <div className="desc">
          Blockchain<br /> Integrations
        </div>
      </ScrollTrigger>
      <ScrollTrigger onEnter={() => setCounteron2(true)} onExit={() => setCounteron2(false)} className="cardnum">
        <div className="head">
          {counteron2 && <CountUp start={0} end={63} duration={1.8} delay={0.4} />}+
        </div>
        <div className="desc">
          Projects<br /> audited
        </div>
      </ScrollTrigger>
      <ScrollTrigger onEnter={() => setCounteron3(true)} onExit={() => setCounteron3(false)} className="cardnum">
        <div className="head">
          ${counteron3 && <CountUp start={0} end={8} duration={1.8} delay={0.4} />}Mn+
        </div>
        <div className="desc">
          Amount<br /> protected
        </div>
      </ScrollTrigger>
      <ScrollTrigger onEnter={() => setCounteron4(true)} onExit={() => setCounteron4(false)} className="cardnum">
        <div className="head">
          {counteron4 && <CountUp start={0} end={145} duration={1.8} delay={0.4} />}+
        </div>
        <div className="desc">
          Critical/high/<br />medium Findings
        </div>
      </ScrollTrigger>
    </div>
  )
}

export default Nums;