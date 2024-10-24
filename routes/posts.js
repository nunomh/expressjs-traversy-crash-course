import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/posts.controller.js';
const router = express.Router();

// get all posts
router.get('/', getPosts);

// get single post
router.get('/:id', getPost);

// Create new post
router.post('/', createPost);

// Update post
router.put('/:id', updatePost);

// Delete post
router.delete('/:id', deletePost);

export default router;