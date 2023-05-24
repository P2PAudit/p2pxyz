import React , { useState , useEffect }  from 'react'
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import axios from 'axios';
var hljs = require('highlight.js');
var hljsDefineSolidity = require('highlightjs-solidity');
const Reportsdetail = () => {

  const { title } = useParams();

  const [report ,setReport] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function highlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljsDefineSolidity(hljs);
      hljs.highlightElement(block);
    });
  }

  useEffect(() => {
    highlightCode();
  }, [report]);

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/P2PAudit/Audit_Reports/main/${title}/assets/details.json`)
      .then(response => {
        console.log(response.data);
        setName(response.data.name);
        setDate(response.data.date);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get(`https://raw.githubusercontent.com/P2PAudit/Audit_Reports/main/${title}/README.md`)
      .then(response => {
        setReport(response.data);
      })
      .catch(error => {
        setReport("");
        console.log(error);
      });
  }, [])

  return (
    <div className='reportbox'>
    <div className="reportdesc">
      <img src={`https://raw.githubusercontent.com/P2PAudit/Audit_Reports/main/${title}/assets/icon.svg`} alt="report icon" className='reportsicon' width="10%"/>
      <div className="reportheadingtitle">{name}</div>
      <div className="reportheadingdate">{date}</div>
      <Markdown>{report}</Markdown>
    </div>
  </div>
  )
}

export default Reportsdetail