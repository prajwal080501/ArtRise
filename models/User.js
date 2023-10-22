const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    profilePicture: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    coverPicture: {
        type: String,
        default: "https://images.inc.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg",
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;