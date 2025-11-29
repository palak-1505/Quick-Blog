import fs from 'fs';
import imagekit from '../config/imagekit.js';
import Blog from '../models/blog.js';

export const addBlog = async (req, res) => {
    try {
        const {title , subTitle , description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;

        //check if all fields are present
        if(!title || !description || !category || !imageFile) {
            return res.json({success: false, message: "All fields are required"});
        }

        //upload Image to Imagekit
        const fileBuffer = fs.readFileSync(imageFile.path);
        const response = await imagekit.upload({
            file : fileBuffer, //required
            fileName : imageFile.originalname, //required
            folder : "/blogs"
        })

        //optimization throuth imagekit URL transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality : 'auto'},//auto compression
                {format : 'webp'},//convert to modern format
                {width: '1280'} //width resizing
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({title, subTitle, description, category, imageUrl: image, isPublished});

        res.json({success: true, message: "Blog added successfully"});


    } catch (error) {
        return res.json({success: false, message: error.message});

    }
};



