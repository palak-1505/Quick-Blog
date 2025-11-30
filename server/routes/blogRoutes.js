import express from 'express';
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById,getCommentsByBlogId, togglePublish } from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';
import { get } from 'mongoose';

const blogRouter = express.Router();

blogRouter.post('/add', upload.single('image'),auth, addBlog);
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/:id', getBlogById);
blogRouter.post('/delete/:id', auth, deleteBlogById);
blogRouter.post('/toggle-publish', auth ,togglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.get('/comments/:blogId', getCommentsByBlogId);




export default blogRouter;