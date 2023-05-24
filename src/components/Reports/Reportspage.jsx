import React , { useState , useEffect }  from 'react'
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import axios from 'axios';
var hljs = require('highlight.js');
var hljsDefineSolidity = require('highlightjs-solidity');

const Reportspage = () => {

  const { title } = useParams();
  const urlkatana = "https://raw.githubusercontent.com/P2PAudit/p2p-Audit-Katana/main"

  const [report ,setReport] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");

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
    axios.get(`${urlkatana}/${title}/assets/details.json`)
      .then(response => {
        console.log(response.data);
        setName(response.data.name);
        setDate(response.data.date);
        setUrl(response.data.url);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get(`${urlkatana}/${title}/Report.md`)
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
        <img src={`${urlkatana}/${title}/assets/icon.svg`} alt="report icon" className='reportsicon' width="10%"/>
        <div className="reportheadingtitle">{name}</div>
        <div className="reportheadingtitle">Findings & Analysis Report - P2PAuditkatana</div>
        <div className="reportheadingdate">{date}</div>
        <Markdown>{report}</Markdown>
      </div>
    </div>
  )
}

export default Reportspage