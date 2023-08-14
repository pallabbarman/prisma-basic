"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.getPost = exports.getAllPosts = exports.createPost = void 0;
const post_service_1 = require("./post.service");
const createPost = async (req, res) => {
    try {
        const result = await (0, post_service_1.insertPost)(req.body);
        res.send({
            success: true,
            message: 'Post created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
};
exports.createPost = createPost;
const getAllPosts = async (req, res) => {
    const options = req.query;
    try {
        const result = await (0, post_service_1.findAllPosts)(options);
        res.send({
            success: true,
            message: 'Posts retrieve successfully!',
            total: result.total,
            data: result.data,
        });
    }
    catch (error) {
        res.send(error);
    }
};
exports.getAllPosts = getAllPosts;
const getPost = async (req, res) => {
    try {
        const id = Number(req.params?.id);
        const result = await (0, post_service_1.findPost)(id);
        res.send({
            success: true,
            message: 'Post retrieve successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
};
exports.getPost = getPost;
const updatePost = async (req, res) => {
    const id = Number(req.params?.id);
    try {
        const result = await (0, post_service_1.editPost)(id, req.body);
        res.send({
            success: true,
            message: 'Post updated successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
};
exports.updatePost = updatePost;
const deletePost = async (req, res) => {
    const id = Number(req.params?.id);
    try {
        const result = await (0, post_service_1.removePost)(id);
        res.send({
            success: true,
            message: 'Post deleted successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
};
exports.deletePost = deletePost;
