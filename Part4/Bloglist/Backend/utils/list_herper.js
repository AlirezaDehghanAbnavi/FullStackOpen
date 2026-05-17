const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) return 0
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null
  const reducer = (max, current) => {
    return current.likes > max.likes ? current : max;
  }

  return blogs.reduce(reducer)
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null
  
  return _.chain(blogs)
    .groupBy('author')
    .map((authorBlogs, authorName) => ({
      author: authorName,
      blogs: authorBlogs.length
    }))
    .maxBy('blogs')
    .value()
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null

  return _.chain(blogs)
    .groupBy('author')
    .map((authorBlogs, authorName) => ({
      author: authorName,
      likes: _.sumBy(authorBlogs, 'likes')
    }))
    .maxBy('likes')
    .value()
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}