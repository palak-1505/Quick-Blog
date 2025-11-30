import express from 'express' ;
import auth from '../middleware/auth.js';
import { adminLogin, getAllComments, getAllBlogsAdmin, deleteCommentById, approveCommentById, getDashboard } from '../controllers/adminController.js' ;

const adminRouter = express.Router() ;

adminRouter.post('/login' , adminLogin)
adminRouter.get('/comments',auth, getAllComments)
adminRouter.get('/blogs', getAllBlogsAdmin);
adminRouter.post('delete-comment/:id', auth, deleteCommentById);
adminRouter.post('aprrove-comment/:id', auth, approveCommentById);
adminRouter.get('/dashboard', auth, getDashboard);


export default adminRouter ;

