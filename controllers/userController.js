const User = require("../models/User.js");
const mongoose = require("mongoose");


exports.getUser = async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username: username });
        const { password, updatedAt, ...other } = user._doc;

        res.status(200).json(other);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteUser = async (req, res) => {
    const { username } = req.body;

    try {
        const user = await User.deleteOne(username);
        res.status(200).json("User has been deleted...");
    }
    catch (err) {
        res.status(500).json(err);
    }
}