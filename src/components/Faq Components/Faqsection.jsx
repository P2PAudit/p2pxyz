import React, { useState } from 'react'
import axios from 'axios';
import Faq from './Faq.jsx';
const urlserver = "https://p2pserver.vercel.app"
const urltest = "http://localhost:5000"

const Faqsection = () => {

  const [faqlineup, setFaqlineup] = useState([]);

  const refresh = async () => {
    try {
      await axios.get(`${urlserver}/getfaqs`)
        .then((response) => {
          const data = response.data;
          setFaqlineup(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    refresh()
  }, [])

  return (
    <div className="faqsection">
      <div className="faqhead">
        Freq<span className='askedq'>. Asked Questions</span><span className='askedsymbol'>&nbsp; ?</span>
      </div>
      <div className="faqdiv">
        <ul className="faqs" id='accordian'>

        {faqlineup.length === 0 ? (
            <div>Loading.....</div>
          ) :
            faqlineup.map((faq) => {
              return (<Faq faq={faq} />)
            })
          }

        </ul>
      </div>
    </div>
  )
}

export default Faqsection