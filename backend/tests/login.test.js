const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./helper')
const mongoose = require('mongoose')




test('login with correct credentials', async () => {
    const username = 'alan'
    const password = 'password'
    const newUser = await helper.createUserWithNameAndPassword(username, password)
    console.log('newUser', newUser)
    await api
        .post('/api/login')
        .send({ username, password })
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .expect(res => {
            expect(res.body.token).toBeDefined()
            expect(res.body.username).toBe(username)
        })
})

afterAll(async () => {
    await mongoose.connection.close()
})




