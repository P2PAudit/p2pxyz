import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import fileicon from '../../images/Reports/file.svg'

const ReportBox = (props) => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/P2PAudit/Audit_Reports/main/${props.report.name}/assets/details.json`)
      .then(response => {
        console.log(response.data);
        setTitle(response.data.name);
        setDate(response.data.date);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <div className='reportborder'>
      <div className='reportborder2'>
        <Link to={`/reports/${props.report.name}`} className='reportsbox'>
          <img src={`https://raw.githubusercontent.com/P2PAudit/Audit_Reports/main/${props.report.name}/assets/icon.svg`} alt="report icon" className='reportsicon' />
          <div>
          <div className="reportstitle">{title}</div>
          <div className="reportsdesc">{date}</div>
          </div>
        </Link>
        <div className='reportslink'>
          <Link to={`/reports/${props.report.name}/Details`} className='reportslink2'>
          <img src={fileicon} alt="file" className='fileicon'/>
          <div>Details</div>
          </Link>
          <Link to={`/reports/${props.report.name}`} className='reportslink2 repreportslinkview'>
          <div>View report</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ReportBox
