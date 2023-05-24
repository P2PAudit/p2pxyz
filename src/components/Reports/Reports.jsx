import React from 'react'
import axios from 'axios';
import { useState ,useEffect } from 'react';
import Reportbox from './Reportbox';
const urlserver = "https://p2pauditserver.vercel.app"

const Reports = () => {

  const [reportlineup, setReportlineup] = useState([]);

  useEffect(() => {
    axios.get(`${urlserver}/getreports`)
    .then(response => {
      const data = response.data;
      setReportlineup(data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])


  return (
    <div className='reports'>
      <div className="reporthead">Our Reports</div>
      <div className="reportssection">
        {reportlineup.length === 0 ? (
          <div>Loading.....</div>
        ) :
          reportlineup.map((report) => {
            return (<Reportbox report={report} />)
          })
        }
      </div>
    </div>
  )
}

export default Reports