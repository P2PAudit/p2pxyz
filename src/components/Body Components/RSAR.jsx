import React from 'react'
import RSARicon from '../../images/RSAR.svg'
import RSARmobileicon from '../../images/rsarmobile.svg'

const RSAR = () => {
  return (
    <div className='rsar'> 
      <div className='rsartitle'>
        <span className="headrsar">R</span>
        <span className="headrsarinside">equest</span>
        <span className="headrsar">S</span>
        <span className="headrsarinside">cheduling</span>
        <span className="headrsar">A</span>
        <span className="headrsarinside">udit</span>
        <span className="headrsar">R</span>
        <span className="headrsarinside">eport</span>
      </div>
      <img src={RSARicon} alt="RSAR" className='path rsarpath hiddenmobile'/>
      <img src={RSARmobileicon} alt="RSAR" className='path rsarpathmobile hidden visiblemobile'/>
    </div>
  )
}

export default RSAR;