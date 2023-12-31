/* eslint-disable object-curly-newline */
import { Request, Response } from 'express';
import { editPost, findAllPosts, findPost, insertPost, removePost } from './post.service';

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
            total: result.total,
            data: result.data,
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

export const updatePost = async (req: Request, res: Response) => {
    const id = Number(req.params?.id);
    try {
        const result = await editPost(id, req.body);

        res.send({
            success: true,
            message: 'Post updated successfully!',
            data: result,
        });
    } catch (error) {
        res.send(error);
    }
};

export const deletePost = async (req: Request, res: Response) => {
    const id = Number(req.params?.id);
    try {
        const result = await removePost(id);

        res.send({
            success: true,
            message: 'Post deleted successfully!',
            data: result,
        });
    } catch (error) {
        res.send(error);
    }
};
