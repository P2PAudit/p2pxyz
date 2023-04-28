import React from 'react'
import faqarr from '../../images/faqarr.svg'

const Faq = (props) => {
  return (
    <li>
      <label for={props.faq._id} className='faqlabelmain'>
        <div className="faqadd">
          +
        </div>
        <div className='faqlabel'>
          {props.faq.question}
        </div>
      </label> 
      <input type="checkbox" name='accordian' id={props.faq._id}/>
      <div className="contentaccordian">
        <img src={faqarr} alt="faq arrow" className='faqarr'/>
        <p className='faqans'>{props.faq.answer}</p>
      </div>
    </li>
  )
}

export default Faq