"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = exports.createOrUpdateProfile = exports.createUser = void 0;
const user_service_1 = require("./user.service");
const createUser = async (req, res) => {
    try {
        const result = await (0, user_service_1.insertUser)(req.body);
        res.send({
            success: true,
            message: 'User created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
};
exports.createUser = createUser;
const createOrUpdateProfile = async (req, res) => {
    try {
        const result = await (0, user_service_1.insertOrUpdateProfile)(req.body);
        res.send({
            success: true,
            message: 'Profile created or updated successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
};
exports.createOrUpdateProfile = createOrUpdateProfile;
const getUsers = async (_req, res) => {
    try {
        const result = await (0, user_service_1.findUsers)();
        res.send({
            success: true,
            message: 'Users retrieves successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
};
exports.getUsers = getUsers;
const getUser = async (req, res) => {
    try {
        const id = Number(req.params?.id);
        const result = await (0, user_service_1.findUser)(id);
        res.send({
            success: true,
            message: 'User retrieves successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
};
exports.getUser = getUser;
