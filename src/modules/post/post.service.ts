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
export const findAllPosts = async (options: any): Promise<Post[]> => {
    const { sortBy, sortOrder, search } = options;
    const result = await prisma.post.findMany({
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

    return result;
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
