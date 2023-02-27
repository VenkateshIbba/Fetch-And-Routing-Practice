import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchBlogData()
  }

  fetchBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachObj => ({
      id: eachObj.id,
      title: eachObj.title,
      imageUrl: eachObj.image_url,
      avatarUrl: eachObj.avatar_url,
      author: eachObj.author,
      topic: eachObj.topic,
    }))
    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogList.map(eachItem => (
            <BlogItem key={eachItem.id} eachBlog={eachItem} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
