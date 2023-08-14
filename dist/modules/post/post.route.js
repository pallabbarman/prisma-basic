"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable object-curly-newline */
const express_1 = require("express");
const post_controller_1 = require("./post.controller");
const router = (0, express_1.Router)();
router.post('/create-post', post_controller_1.createPost);
router.get('/', post_controller_1.getAllPosts);
router.get('/:id', post_controller_1.getPost);
router.patch('/:id', post_controller_1.updatePost);
router.delete('/:id', post_controller_1.deletePost);
exports.default = router;
