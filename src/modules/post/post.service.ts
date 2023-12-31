/* eslint-disable object-curly-newline */
import { Post, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const insertPost = async (data: Post): Promise<Post> => {
    const result = await prisma.post.create({
        data,
        include: {
            author: true,
            category: true,
        },
    });

    return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const findAllPosts = async (options: any) => {
    const { sortBy, sortOrder, search, page, limit } = options;
    const skip = parseInt(limit, 10) * parseInt(page, 10) - parseInt(limit, 10) || 0;
    const take = parseInt(limit, 10) || 10;

    return prisma.$transaction(async (session) => {
        const result = await session.post.findMany({
            skip,
            take,
            include: {
                author: true,
                category: true,
            },
            orderBy:
                sortBy && sortOrder
                    ? {
                          [sortBy]: sortOrder,
                      }
                    : { createAt: 'desc' },
            where: {
                OR: [
                    {
                        title: {
                            contains: search,
                            mode: 'insensitive',
                        },
                    },
                    {
                        author: {
                            name: {
                                contains: search,
                                mode: 'insensitive',
                            },
                        },
                    },
                ],
            },
        });

        const total = await session.post.count();

        return {
            data: result,
            total,
        };
    });
};

export const findPost = async (id: number): Promise<Post | null> => {
    const result = await prisma.post.findUnique({
        where: {
            id,
        },
        include: {
            author: true,
            category: true,
        },
    });

    return result;
};

export const editPost = async (id: number, payload: Partial<Post>): Promise<Post | null> => {
    const result = await prisma.post.update({
        where: {
            id,
        },
        data: payload,
        include: {
            author: true,
            category: true,
        },
    });

    return result;
};

export const removePost = async (id: number): Promise<Post> => {
    const result = await prisma.post.delete({
        where: {
            id,
        },
    });

    return result;
};
