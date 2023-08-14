"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const category_service_1 = require("./category.service");
const createCategory = async (req, res) => {
    try {
        const result = await (0, category_service_1.insertCategory)(req.body);
        res.send({
            success: true,
            message: 'Category created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
};
exports.createCategory = createCategory;
