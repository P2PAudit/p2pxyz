import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

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
    <Link to={`/reports/${props.report.name}`} className='reportsbox'>
      <img src={`https://raw.githubusercontent.com/P2PAudit/Audit_Reports/main/${props.report.name}/assets/icon.svg`} alt="report icon" className='reportsicon' />
      <div className="reportstitle">{title}</div>
      <div className="reportsdesc">{date}</div>
    </Link>
  )
}

export default ReportBox
