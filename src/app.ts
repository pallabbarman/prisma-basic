import cors from 'cors';
import express, { Application } from 'express';
import categoryRoutes from 'modules/category/category.route';
import postRoutes from 'modules/post/post.route';
import userRoutes from 'modules/user/user.route';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/posts', postRoutes);

export default app;
