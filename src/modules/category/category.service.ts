/* eslint-disable import/prefer-default-export */
import { Category, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const insertCategory = async (data: Category): Promise<Category> => {
    const result = await prisma.category.create({
        data,
    });

    return result;
};
