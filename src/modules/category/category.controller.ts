/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import { insertCategory } from './category.service';

export const createCategory = async (req: Request, res: Response) => {
    try {
        const result = await insertCategory(req.body);

        res.send({
            success: true,
            message: 'Category created successfully!',
            data: result,
        });
    } catch (error) {
        res.send(error);
    }
};
