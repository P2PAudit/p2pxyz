import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

const ReportBox = (props) => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    axios.get(`${props.report.reportLink}/assets/details.json`)
      .then(response => {
        console.log(response.data);
        setTitle(response.data.name);
        setDate(response.data.date);
        setUrl(response.data.url);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <Link to={`/reports/${url}`} className='reportsbox'>
      <img src={`${props.report.reportLink}/assets/icon.svg`} alt="report icon" className='reportsicon' />
      <div className="reportstitle">{title}</div>
      <div className="reportsdesc">{date}</div>
    </Link>
  )
}

export default ReportBox
