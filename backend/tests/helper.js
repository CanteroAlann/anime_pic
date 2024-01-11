const Image = require('../models/image')
const User = require('../models/user')
const bcrypt = require('bcrypt')

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

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

const createUser = async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
}



module.exports = {
    loadImages, initialImages, usersInDb, createUser
}
