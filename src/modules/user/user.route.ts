/* eslint-disable object-curly-newline */
import { Router } from 'express';
import { createOrUpdateProfile, createUser, getUser, getUsers } from './user.controller';

const router = Router();

router.post('/create-user', createUser);
router.post('/profile', createOrUpdateProfile);
router.get('/', getUsers);
router.get('/:id', getUser);

export default router;
