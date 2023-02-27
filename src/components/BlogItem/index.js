import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = eachBlog
  return (
    <Link to={`/blogs/${id}`} className="route-link">
      <div className="blog-item">
        <img src={imageUrl} alt={topic} className="blog-img" />
        <div className="content-container">
          <p className="topic-name">{topic}</p>
          <h1 className="title-name">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={author} className="author-img" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
