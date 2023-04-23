import React , { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import pagenotfound from '../images/notfound.svg'

const NotFound = () => {

  const navigate = useNavigate();
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handlenotfoundrequest = async () => {
    await delay(2000);
    navigate('/');
  }

  useEffect(() => {
    handlenotfoundrequest();
  }, [])
  

  return (
    <div>
      <img src={pagenotfound} alt="Page Not Found" className='notfound'/>
    </div>
  )
}

export default NotFound;