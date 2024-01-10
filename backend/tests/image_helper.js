const Image = require('../models/image')

const initialImages = [
    {
        filename: 'image1.jpg',
        favorite: false,
    },
    {
        filename: 'image2.jpg',
        favorite: true,
    },
]

const loadImages = async () => {
    await Image.deleteMany({})
    await Image.insertMany(initialImages)
}


module.exports = {
    loadImages, initialImages
}
