import React , { useEffect , useState } from 'react'
import { Link } from "react-router-dom"
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const Blog = (props) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/prasantgupta52/sample-blogs/main/${props.ele.name}/title.txt`)
      .then(response => {
        setTitle(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get(`https://raw.githubusercontent.com/prasantgupta52/sample-blogs/main/${props.ele.name}/README.md`)
      .then(response => {
        setDesc(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <Link target="_blank" className='blogbox'>  
     {props.imgbanner === "small" ? (
            <img src={`https://raw.githubusercontent.com/prasantgupta52/sample-blogs/main/${props.ele.name}/assets/1bg.svg`} alt="blog image" className='blogimage'/>
          ) : (
            <img src={`https://raw.githubusercontent.com/prasantgupta52/sample-blogs/main/${props.ele.name}/assets/bigbanner.svg`} alt="blog image" className='blogimage'/>
          )
      }
      <div className="blogtitle">{title}</div>
      <div className="blogdesc"><ReactMarkdown>{desc}</ReactMarkdown></div>
    </Link>
  )
}

export default Blog;