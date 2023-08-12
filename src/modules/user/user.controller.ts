/* eslint-disable object-curly-newline */
import { Request, Response } from 'express';
import { findUser, findUsers, insertOrUpdateProfile, insertUser } from './user.service';

export const createUser = async (req: Request, res: Response) => {
    try {
        const result = await insertUser(req.body);

        res.send({
            success: true,
            message: 'User created successfully!',
            data: result,
        });
    } catch (error) {
        res.send(error);
    }
};

export const createOrUpdateProfile = async (req: Request, res: Response) => {
    try {
        const result = await insertOrUpdateProfile(req.body);

        res.send({
            success: true,
            message: 'Profile created or updated successfully!',
            data: result,
        });
    } catch (error) {
        res.send(error);
    }
};

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const result = await findUsers();

        res.send({
            success: true,
            message: 'Users retrieves successfully!',
            data: result,
        });
    } catch (error) {
        res.send(error);
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params?.id);
        const result = await findUser(id);

        res.send({
            success: true,
            message: 'User retrieves successfully!',
            data: result,
        });
    } catch (error) {
        res.send(error);
    }
};
