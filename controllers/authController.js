const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "The email already exists." });

        if (password.length < 6)
            return res.status(400).send({ msg: "Password must be atleast 6 characters long." });

        // Password Encryption
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user

        const newUser = new User({
            username, email, password: hashedPassword
        });

        // Save user
        await newUser.save();

        res.status(200).send({ msg: "Sign up success!" });

    }
    catch (error) {
        res.status(500).send({ msg: error.message });
    }

}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User does not exist." }); // Return early after sending a response
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "Incorrect Password." }); // Return early after sending a response
        }

        // If login success, create access token and refresh token
        const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });

        return res.status(200).json({ 
            accessToken, user, msg: "Login successful!"
        });

    }
    catch (error) {
        return res.status(500).json({
            msg: "Some error occurred"
        });
    }
}

