import React , { useState , useEffect }  from 'react'
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import axios from 'axios';
var hljs = require('highlight.js');
var hljsDefineSolidity = require('highlightjs-solidity');

const BlogPage = () => {

  const { title } = useParams();

  const [markdown, setMarkdown] = useState("# Loading....!");

  
  function highlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljsDefineSolidity(hljs);
      hljs.highlightElement(block);
    });
  }

  useEffect(() => {
    highlightCode();
  }, [markdown]);

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/prasantgupta52/sample-blogs/main/${title}/README.md`)
      .then(response => {
        setMarkdown(response.data);
      })
      .catch(error => {
        setMarkdown("# No Blog Found Wrong URL");
        console.log(error);
      });
  }, [])

  return (
    <div className='blogbox'>
      <div className="blogdesc">
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  )
}

export default BlogPage