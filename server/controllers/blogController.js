import fs from 'fs';
import imagekit from '../config/imagekit.js';
import Blog from '../models/blog.js';
import Comment from '../models/comment.js';
import main from '../config/gemini.js';

export const addBlog = async (req, res) => {
  try {
    console.log(req.body, req.file);

    const { title, subTitle, description, category, author, isPublished } =
      JSON.parse(req.body.blog);

    if (!req.file) {
      return res.json({ success: false, message: "Image is required" });
    }

    const fileBuffer = fs.readFileSync(req.file.path);

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: req.file.originalname,
      folder: "/blogs",
    });

    const imageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      author,
      imageUrl,
      isPublished,
    });

    res.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};


export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json({ success: true, blogs });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};


export const getBlogById = async (req, res) => {
    try{
        const {id} = req.params;
        const blog = await Blog.findById(id);
        if(!blog){
            return res.json({success: false, message: "Blog not found"});
        }
        res.json({success:true, blog});
    } catch (error){
        res.json({success: false, message: error.message});
    }   
}; 

export const deleteBlogById = async (req, res) => {
    try{
        const {id} = req.params;
        await Blog.findByIdAndDelete({_id: id});
        res.json({success:true, message: "Blog deleted successfully"});
    } catch (error){
        res.json({success: false, message: error.message});
    }   
};

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }

    blog.isPublished = !blog.isPublished;
    await blog.save();

    res.json({
      success: true,
      message: `Blog ${blog.isPublished ? "published" : "unpublished"} successfully`,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


export const addComment = async (req, res) => {
  try {
    console.log(req.body)
    const { blog, name, content } = req.body;

    if (!blog) {
      return res.json({
        success: false,
        message: "Blog ID is required"
      });
    }

    

    await Comment.create({ blog, name, content });

    res.json({ success: true, message: "Comment added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate('blog', 'title') // 🔥 REQUIRED
      .sort({ createdAt: -1 });

    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


export const getCommentsByBlogId = async (req, res) => {
  try {
    const {id} = req.params;
    
    // FIXED: Chain .sort() on query before await, not on result array
    const comments = await Comment.find({blog: id, isApproved: true})
    .populate('blog', 'title') // 🔥 REQUIRED
      .sort({createdAt: -1})  // Now valid: Mongoose handles object sort
      .lean();  // Optional: Faster plain JS objects for frontend

    res.json({success:true, comments});
  } catch(error){
    console.error(error); // Log for debugging
    res.json({success:false, message:error.message});   
  }
};


export const generateContent = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.json({ success: false, message: "Prompt is required" });
        }
        const generatedText = await main(prompt + "Generate a detailed blog content on the above topic.");
        res.json({ success: true, generatedText });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};


export const approveComment = async (req, res) => {
    try {
        const { id } = req.params;  
        const comment = await Comment.findById(id);
        if (!comment) {
            return res.json({ success: false, message: "Comment not found" });
        } 
        comment.isApproved = true;
        await comment.save();  
        res.json({ success: true, message: "Comment approved successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }   
};


export const deleteCommentById = async (req, res) => {
    try{
        const {id} = req.params;  
        await Comment.findByIdAndDelete(id);
        res.json({success:true, message: "Comment deleted successfully"});
    }
    catch (error){
        res.json({success: false, message: error.message});
    } 
};