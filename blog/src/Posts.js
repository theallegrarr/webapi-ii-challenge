import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiBase=`http://localhost:4100`;

export default function Posts(){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`${apiBase}/api/posts`)
         .then(res => {
           setPosts(res.data);
         }).catch(err => console.log(err));
  }, [])

  const deletePost = (id) => {
    axios.delete(`${apiBase}/api/posts/${id}`)
         .then(res => {
           setPosts(posts.filter(user => user.id !== id));
         }).catch(err => console.log(err));
  }
  
  return (<div>
    <h1>All Posts</h1>
    {posts.length > 0 ?
      posts.map(post => (
        <div className='users'>
          <h4 style={{'color':'#09d3ac'}}>{post.title}</h4>
          <h4>{post.contents}</h4>
          <h4>{post.created_at}</h4>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      )) : `No Posts Found!`
    }
  </div>);
}