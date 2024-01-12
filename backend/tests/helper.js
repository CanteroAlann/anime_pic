const Image = require('../models/image')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)


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

const createUserWithNameAndPassword = async (username, password) => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash(password, 10)
    const user = new User({ username, passwordHash })
    await user.save()
}

const createUserAndLogin = async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('another', 10)
    const user = new User({ username: 'test', passwordHash })
    await user.save()

    const response = await api
        .post('/api/login')
        .send({ username: 'test', password: 'another' })
        .expect(200)
        .expect('Content-Type', /application\/json/)
    return response.body.token
}

module.exports = {
    loadImages,
    initialImages,
    usersInDb,
    createUser,
    createUserWithNameAndPassword,
    createUserAndLogin
}
