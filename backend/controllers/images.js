const Image = require('../models/image');
const imageRouter = require('express').Router();
const multer = require('multer');



// GET all images
imageRouter.get('/', async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + file.originalname
        cb(null, uniqueSuffix)
    }
})

const upload = multer({ storage: storage })




// POST one image
imageRouter.post('/', upload.single('img'), async (req, res) => {
    const image = new Image({
        filename: req.file.filename,
        favorite: req.body.favorite,
    });
    try {
        const newImage = await image.save();
        res.status(201).json(newImage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = imageRouter;