import express from 'express';
import errorHandler from '../middleware/error.js';
const router = express.Router();

const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
];

router.get('/', (req,res) => {
    const param = req.query;
    const limit = param.limit;

    if (limit && !isNaN(limit) && limit > 0) {
      return res.status(200).json(posts.slice(0, limit));
    }
  
    res.status(200).json(posts);
})
  
router.get('/:id', (req, res, next) => {
    const postID = req.params.id;
  
    if (isNaN(postID)) {
      return next({ message: 'Wrong id', status: 400 });
    }
  
    const post = posts.find(post => post.id === parseInt(postID));
  
    if (!post) {
      return next({ message: 'Post not found', status: 404 });
    }
  
    res.status(200).json(post);
})

router.post('/', (req, res, next) => {
    if (!req.body || !req.body.title || !req.body.title.length > 0) {
        return next({ message: 'Title is required', status: 400 });
    }

    const newPost = {
      id: posts.length + 1,
      title: req.body.title
    }

    posts.push(newPost);
    console.log(posts);
    res.status(201).json(newPost);
})

router.put('/:id', (req, res, next) => {

	if(isNaN(req.params.id)) {
        return next({ message: 'Wrong id', status: 400 });
    }

    if (!req.body || !req.body.title || !req.body.title.length > 0) {
        return next({ message: 'Title is required', status: 400 });
    }

    const postID = req.params.id;
    const postIndex = posts.findIndex(post => post.id === parseInt(postID));
    const post = posts[postIndex];

    if(!post){
        return next({ message: 'Post not found', status: 404 });
    }

    post.title = req.body.title;
    res.status(200).json(post);
})

router.delete('/:id', (req, res, next) => {

    if(isNaN(req.params.id)) {
        return next({ message: 'Wrong id', status: 400 });
    }

    const postID = req.params.id;
    const postIndex = posts.findIndex(post => post.id === parseInt(postID));
    const post = posts[postIndex];

    if(!post){
        return next({ message: 'Post not found', status: 404 });
    }

    posts.splice(postIndex, 1);
	res.status(200).json({ message: 'Post deleted', post });
})

export default router
