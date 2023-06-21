import '../style/pages/blog.css'
const Blog = () => {
  const handleAddNewPost = (e) => {
    e.preventDefault();
  }
  return (
    <div className='blog-page'>
      <form onSubmit={handleAddNewPost}>
        <h2 className='child'>Add new Post</h2>
        <div className='child title-input'>
          <label htmlFor="title">Title</label>
          <input type="text" id='title'/>
        </div>
        <textarea rows="20" cols="50" className='child'></textarea>
        <input type="submit" className='child submit-button' value='Create Post'/>
      </form>
    </div>
  )
}

export default Blog;
