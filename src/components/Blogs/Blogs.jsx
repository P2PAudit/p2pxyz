import React, { useEffect, useState } from 'react'
import Blog from './Blog';
import axios from 'axios';

const Blogs = () => {

  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/repos/prasantgupta52/sample-blogs/contents')
      .then(response => {
        setContent(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])


  return (
    <div className='blogs'>
      <div className="bloghead">Our Blogs</div>
      <div className="blogssection">
        {content.length === 0 ? (
          <div>Loading.....</div>
        ) : (
          content.reverse().map((ele, index) => {
            if (index === 0) {
              return (<Blog ele={ele} key={ele.name} imgbanner="big" />);
            } else {
              return (<Blog ele={ele} key={ele.name} imgbanner="small" />);
            }
          })
        )}
      </div>
    </div>
  )
}

export default Blogs