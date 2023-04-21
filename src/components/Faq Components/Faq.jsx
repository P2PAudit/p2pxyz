import React from 'react'

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
        <p>{props.faq.answer}</p>
      </div>
    </li>
  )
}

export default Faq