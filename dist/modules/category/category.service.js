"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertCategory = void 0;
/* eslint-disable import/prefer-default-export */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertCategory = async (data) => {
    const result = await prisma.category.create({
        data,
    });
    return result;
};
exports.insertCategory = insertCategory;
