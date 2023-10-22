const mongoose = require('mongoose');


const artSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
    },
    tags: {
        //array
        type: Array,
        required: true,
        default: [],
    },
    artist: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Art", artSchema);