const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },

})

module.exports = mongoose.model('Image', imageSchema)
