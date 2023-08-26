const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    mileage: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    inFavorite: {
        type: Boolean,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    carImage: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Cars', carSchema);