const mongoose = require('mongoose')



// Define the image schema with the following properties: filename, favorite
// The filename is the name of the file upload and the favorite is false by default
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


// Transform the object returned by Mongoose by deleting the __v property and changing the _id property to id
imageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Image', imageSchema)
