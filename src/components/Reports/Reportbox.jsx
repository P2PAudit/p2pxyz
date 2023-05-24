import React , { useEffect , useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';

const ReportBox = (props) => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    axios.get(`${props.report.reportLink}/assets/details.json`)
      .then(response => {
        setTitle(response.data.name);
        setDate(response.data.date);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get(`${props.report.reportLink}/assets/icon.svg`)
      .then(response => {
        setIcon(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <Link to={`reports/${title}`} className='reportsbox'>  
      <img src={`${props.report.reportLink}/assets/icon.svg`} alt="report icon" className='reportsicon'/>
      <div className="reportstitle">{title}</div>
      <div className="reportsdesc">{date}</div>
    </Link>
  )
}

export default ReportBox
