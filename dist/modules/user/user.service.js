"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = exports.findUsers = exports.insertOrUpdateProfile = exports.insertUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertUser = async (data) => {
    const result = await prisma.user.create({
        data,
    });
    return result;
};
exports.insertUser = insertUser;
const insertOrUpdateProfile = async (data) => {
    const isExist = await prisma.profile.findUnique({
        where: {
            userId: data.userId,
        },
    });
    if (isExist) {
        const result = await prisma.profile.update({
            where: {
                userId: data.userId,
            },
            data: {
                bio: data.bio,
            },
        });
        return result;
    }
    const result = await prisma.profile.create({
        data,
    });
    return result;
};
exports.insertOrUpdateProfile = insertOrUpdateProfile;
const findUsers = async () => {
    const result = await prisma.user.findMany();
    return result;
};
exports.findUsers = findUsers;
const findUser = async (id) => {
    const result = await prisma.user.findUnique({
        where: {
            id,
        },
        include: {
            profile: true,
        },
    });
    return result;
};
exports.findUser = findUser;
