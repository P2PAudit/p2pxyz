import React , { useState , useEffect }  from 'react'
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import axios from 'axios';
var hljs = require('highlight.js');
var hljsDefineSolidity = require('highlightjs-solidity');

const Reportspage = () => {

  const { url } = useParams();

  const [gas, setGas] = useState("");
  const [info, setInfo] = useState("");
  const [low, setLow] = useState("");
  const [medium, setMedium] = useState("");
  const [high, setHigh] = useState("");

  function highlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljsDefineSolidity(hljs);
      hljs.highlightBlock(block);
    });
  }

  useEffect(() => {
    highlightCode();
  }, [gas,info,low,medium]);

  useEffect(() => {
    axios.get(`/README.md`)
      .then(response => {
        setGas(response.data);
      })
      .catch(error => {
        setGas("");
        console.log(error);
      });
      axios.get(`/README.md`)
      .then(response => {
        setInfo(response.data);
      })
      .catch(error => {
        setInfo("");
        console.log(error);
      });
      axios.get(`/README.md`)
      .then(response => {
        setLow(response.data);
      })
      .catch(error => {
        setLow("");
        console.log(error);
      });
      axios.get(`/README.md`)
      .then(response => {
        setMedium(response.data);
      })
      .catch(error => {
        setMedium("");
        console.log(error);
      });
      axios.get(`/README.md`)
      .then(response => {
        setHigh(response.data);
      })
      .catch(error => {
        setHigh("");
        console.log(error);
      });
  }, [])

  return (
    <div className='blogbox'>
      <div className="blogdesc">
        <Markdown>{gas}</Markdown>
        <Markdown>{info}</Markdown>
        <Markdown>{low}</Markdown>
        <Markdown>{medium}</Markdown>
        <Markdown>{high}</Markdown>
      </div>
    </div>
  )
}

export default Reportspage