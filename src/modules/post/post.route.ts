/* eslint-disable object-curly-newline */
import { Router } from 'express';
import { createPost, deletePost, getAllPosts, getPost, updatePost } from './post.controller';

const router = Router();

router.post('/create-post', createPost);
router.get('/', getAllPosts);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
