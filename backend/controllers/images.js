const Image = require('../models/image');
const imageRouter = require('express').Router();
const multer = require('multer');
const jwt = require('jsonwebtoken')
const User = require('../models/user')



// GET all images
imageRouter.get('/', async (req, res) => {
    const images = await Image.find();
    res.json(images);
});

// storage of images in the frontend/src/images folder
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // if the environment is test, save the image in the tests/images folder
        if (process.env.NODE_ENV === 'test') {
            cb(null, './tests/images')
            return
        }
        cb(null, '../frontend/src/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = file.originalname
        cb(null, uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

const getTokenFrom = req => {
    const authorization = req.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}



// POST one image
imageRouter.post('/', upload.single('img'), async (req, res) => {

    const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET)
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
    }
    const user = await User.findById(decodedToken.id)


    const image = new Image({
        filename: req.file.filename,
        favorite: req.body.favorite,
    });
    const newImage = await image.save();
    user.images = user.images.concat(newImage._id)
    await user.save()
    res.status(201).json(newImage)
});

module.exports = imageRouter;