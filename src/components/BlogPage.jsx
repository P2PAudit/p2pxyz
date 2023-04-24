import React , { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import axios from 'axios';

const BlogPage = () => {

  const { title } = useParams();

  const [markdown, setMarkdown] = useState("# Loading....!");

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