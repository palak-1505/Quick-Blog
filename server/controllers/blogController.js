export const addBlog = async (req, res) => {
    try {
        const {title , subTitle , description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file.path;

        //check if all fields are present
        if(!title || !description || !category || !imageFile) {
            return res.json({success: false, message: "All fields are required"});
        }

    } catch (error) {
        return res.json({success: false, message: error.message});

    }
};