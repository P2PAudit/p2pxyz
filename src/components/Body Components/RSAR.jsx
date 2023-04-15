import React from 'react'
import RSARicon from '../../images/RSAR.svg'

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
      <img src={RSARicon} alt="RSAR" />
    </div>
  )
}

export default RSAR;