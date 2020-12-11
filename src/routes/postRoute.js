const {Router} = require('express')

const postRouter = Router()

const {createPost,getPost,getPostByAuthor,getPostByParam,updatePost,deletePost} = require('../controllers/postController')

//route for creating post
postRouter.post('/blog-api/blog/newPost',createPost);

//route for getting all  posts or blogs 
postRouter.get('/blog-api/blog/newPost',getPost);

//route for getting post by author
postRouter.get('/blog-api/blog/newPost',getPostByAuthor);

//route for getting post by param
postRouter.get('/blog-api/blog/:postId',getPostByParam);

//route for updating post
postRouter.patch('/blog-api/blog/newPost',updatePost);

//route for deleting post
postRouter.delete('/blog-api/blog/newPost',deletePost)


module.exports = postRouter

