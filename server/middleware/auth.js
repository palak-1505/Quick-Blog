import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.headers.authorization;
     if (!token) {
        return res.json({ success: false, message: "No Token Provided" });
    }

    // Remove "Bearer " prefix
    if (token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
    }

    try{
        jwt.verify(token, process.env.JWT_SECRET);
        
        next();
    } catch (error) {
        return res.json({success: false, message: "Unauthorized Access"});
    }
};

export default auth;