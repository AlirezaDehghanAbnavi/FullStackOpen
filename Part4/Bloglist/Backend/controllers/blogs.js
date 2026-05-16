const blogRouter = require('express').Router()
const Blog = require('../models/blog')


blogRouter.get('/', (request, response, next) => {
    Blog.find({})
        .then(blogs => response.json(blogs))
        .catch(error => next(error))
})


blogRouter.get('/info', (request, response) => {
    Blog.countDocuments({}).then(count => {
        response.send(`
      <p>Bloglist has info for ${count} blogs</p>
      <p>${new Date()}</p>
    `);
    })
        .catch(err => {
            console.log(err);
            response.status(500).send('Error Fetching Data');
        })
})

blogRouter.get('/:id', (request, response, next) => {
    Blog.findById(request.params.id)
        .then(blog => {
            if (blog) {
                response.json(blog)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => {
            next(error)
        })
})

blogRouter.post('/bulk', async (request, response, next) => {
    const blogsArray = request.body.blogs;

    Blog.insertMany(blogsArray)
        .then(savedBlog => {
            console.log(`Successfully saved ${savedBlog.length} products!`);
            response.status(201).json(savedBlog)
        })
        .catch(error => {
            console.log('Error saving products:', error.message);
            next(error);
        });
})

blogRouter.post('/', async (request, response, next) => {
    try {
        const blog = new Blog({
            title: request.body.title,
            author: request.body.author,
            url: request.body.url,
            likes: request.body.likes
        });

        const savedBlog = await blog.save();
        response.status(201).json(savedBlog);
    } catch (error) {
        next(error); 
    }
});

blogRouter.put('/:id', (request, response, next) => {
    const { title, author, url,likes} = request.body
    Blog.findById(request.params.id)
        .then(blog => {
            if (!blog) {
                return response.status(404).end()
            }

            blog.title = title
            blog.author = author
            blog.url = url
            blog.likeslikes =likes

            return blog.save().then((updatedItem) => {
                response.json(updatedItem)
            })
        })
        .catch(error => next(error))
})

blogRouter.delete('/:id', async (request, response, next) => {
    try {
        await Blog.findByIdAndDelete(request.params.id);
        response.status(204).end();
    } catch (error) {
        next(error); 
    }
});

module.exports = blogRouter