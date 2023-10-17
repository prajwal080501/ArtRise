const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.register = async (req, res) => {
    const {username, email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(user) return res.status(400).json({msg: "The email already exists."});
        
        if(password.length < 6)
            return res.status(400).json({msg: "Password is at least 6 characters long."});

        // Password Encryption
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user

        const newUser = new User({
            username, email, password: hashedPassword
        });

        // Save user
        await newUser.save();

        res.status(200).json({msg: "Sign up success!"});

    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
    
}

exports.login = (req, res) => {
    const { email, password} = req.body;

    console.log(req.body);
}
