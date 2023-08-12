"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable object-curly-newline */
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
router.post('/create-user', user_controller_1.createUser);
router.post('/profile', user_controller_1.createOrUpdateProfile);
router.get('/', user_controller_1.getUsers);
router.get('/:id', user_controller_1.getUser);
exports.default = router;
