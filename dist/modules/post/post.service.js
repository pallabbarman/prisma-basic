"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePost = exports.editPost = exports.findPost = exports.findAllPosts = exports.insertPost = void 0;
/* eslint-disable object-curly-newline */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertPost = async (data) => {
    const result = await prisma.post.create({
        data,
        include: {
            author: true,
            category: true,
        },
    });
    return result;
};
exports.insertPost = insertPost;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const findAllPosts = async (options) => {
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
            orderBy: sortBy && sortOrder
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
exports.findAllPosts = findAllPosts;
const findPost = async (id) => {
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
exports.findPost = findPost;
const editPost = async (id, payload) => {
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
exports.editPost = editPost;
const removePost = async (id) => {
    const result = await prisma.post.delete({
        where: {
            id,
        },
    });
    return result;
};
exports.removePost = removePost;
