import express from 'express';
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById,
    getCommentsByBlogId, togglePublish, getAllComments,
    approveComment, deleteCommentById } from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';
import { get } from 'mongoose';

const blogRouter = express.Router();

blogRouter.post('/add', upload.single('image'), addBlog);
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/comments', getAllComments);
blogRouter.get('/:id', getBlogById);
blogRouter.delete('/comments/:id', deleteCommentById);
blogRouter.delete('/delete/:id', deleteBlogById);
blogRouter.patch('/toggle-publish/:id',togglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.get('/comments/:id', getCommentsByBlogId);
blogRouter.patch('/approve-comment/:id', approveComment);




export default blogRouter;