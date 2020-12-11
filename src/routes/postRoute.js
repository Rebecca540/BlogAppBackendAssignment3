const router = require('express').Router()

const { addPost, getPosts } = require('../controllers/postController')

//creating post 
router.post('/api/newpost', addPost)

//retrieving posts
router.get('/api/post', getPosts)

module.exports = router