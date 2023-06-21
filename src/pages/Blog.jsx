import { useState } from 'react'

import '../style/pages/blog.css'
const Blog = () => {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handleAddNewPost = (e) => {
    e.preventDefault();
    let postsCopy = [...posts];
    postsCopy.push({title: title, body: post});
    setPosts(postsCopy);
  }

  return (
    <div className='blog-page'>
      <h1>Blog Page</h1>
      <div className='posts'>
        {posts.map((post, id) => {
          return <div className="post" key={id}>
            <h2>
              {post.title}
            </h2>
            <p>
              {post.body}
            </p>
          </div>
        })}
      </div>
      <form onSubmit={handleAddNewPost}>
        <h2 className='child'>Add new Post</h2>
        <div className='child title-input'>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <textarea rows="20" cols="50" className='child' onChange={(e) => setPost(e.target.value)}></textarea>
        <input type="submit" className='child submit-button' value='Create Post'/>
      </form>
    </div>
  )
}

export default Blog;
