const User = require("../models/User.js");
const jwt = require("jsonwebtoken")
exports.verifyToken = async (req, res, next) => {
    let token;
    req.headers.authorization && req.headers.authorization.startsWith("Bearer") ? token = req.headers.authorization.split(" ")[1] : null;
    if (!token){
        return res.status(401).json("You are not authorized to access this route");
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded.id);
        if (!user){
            return res.status(404).json("No user found with this id");
        }
        req.user = user;
        next();
    }
    catch (err) {
        return res.status(500).json(err);
    }
}