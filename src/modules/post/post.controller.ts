import { Request, Response } from 'express';
import { findAllPosts, findPost, insertPost } from './post.service';

export const createPost = async (req: Request, res: Response) => {
    try {
        const result = await insertPost(req.body);

        res.send({
            success: true,
            message: 'Post created successfully!',
            data: result,
        });
    } catch (error) {
        res.send(error);
    }
};

export const getAllPosts = async (req: Request, res: Response) => {
    const options = req.query;
    try {
        const result = await findAllPosts(options);

        res.send({
            success: true,
            message: 'Posts retrieve successfully!',
            data: result,
        });
    } catch (error) {
        res.send(error);
    }
};

export const getPost = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params?.id);
        const result = await findPost(id);

        res.send({
            success: true,
            message: 'Post retrieve successfully!',
            data: result,
        });
    } catch (error) {
        res.send(error);
    }
};
