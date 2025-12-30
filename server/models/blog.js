import mongoose from "mongoose";
import Comment from "./comment.js";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    subTitle:{
        type: String,
    },
    description:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,   
    },
    author:{
        type: String,
        default: "Admin",
    },
    imageUrl:{
        type: String,
        required: true, 
    },
    isPublished:{
        type: Boolean,
        default: false, 
    },}, {timestamps: true}
);

// ✅ CASCADE DELETE COMMENTS
blogSchema.pre("findOneAndDelete", async function (next) {
  const blogId = this.getQuery()._id;

  await Comment.deleteMany({ blog: blogId });

});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
    
