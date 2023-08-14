"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const category_route_1 = __importDefault(require("./modules/category/category.route"));
const post_route_1 = __importDefault(require("./modules/post/post.route"));
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1/users', user_route_1.default);
app.use('/api/v1/categories', category_route_1.default);
app.use('/api/v1/posts', post_route_1.default);
exports.default = app;
