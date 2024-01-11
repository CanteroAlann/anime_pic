const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./helper')
const fs = require('mz/fs');



beforeEach(async () => {
    await helper.loadImages()
}
)


test('all images are returned', async () => {
    const response = await api.get('/api/images')
    expect(response.body.length).toBe(helper.initialImages.length)
})

test('images are returned as json', async () => {
    await api
        .get('/api/images')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}
)

test('post a new image works well', async () => {
    const newImage = {
        filename: 'image_test.png',
        favorite: false,
    }
    const filePath = './tests/images/image_test.png'
    fs.exists(filePath)
        .then(exists => {
            if (!exists) {
                return Error('file not found')
            }
        })

    await api
        .post('/api/images', newImage)
        .attach('img', filePath, { contentType: 'image/png' })
        .expect(201)
        .expect('Content-Type', /application\/json/)
    const response = await api.get('/api/images')
    const filenames = response.body.map(r => r.filename)
    expect(response.body.length).toBe(helper.initialImages.length + 1)
    expect(filenames).toContain('image_test.png')
}
)


afterAll(async () => {
    await mongoose.connection.close()
})