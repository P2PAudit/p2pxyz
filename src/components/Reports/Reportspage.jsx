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

  function highlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljsDefineSolidity(hljs);
      hljs.highlightBlock(block);
    });
  }

  useEffect(() => {
    highlightCode();
  }, [report]);

  useEffect(() => {
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
    <div className='blogbox'>
      <div className="blogdesc">
        <Markdown>{report}</Markdown>
      </div>
    </div>
  )
}

export default Reportspage