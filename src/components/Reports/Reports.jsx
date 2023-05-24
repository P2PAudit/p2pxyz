import React from 'react'
import axios from 'axios';
import { useState ,useEffect } from 'react';
import Reportbox from './Reportbox';

const Reports = () => {

  const [reportlineup, setReportlineup] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/repos/P2PAudit/Audit_Reports/contents')
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
      <div className="reportssection">
        {reportlineup.length === 0 ? (
          <div>Loading.....</div>
        ) :
          reportlineup.reverse().map((report) => {
            if(report.name==="assets"||report.name==="README.md") {

            } else {
              return (
              <>
              <Reportbox report={report} />
              </>)
            }
          })
        }
      </div>
    </div>
  )
}

export default Reports