const express = require('express');
const app = express();
require('express-async-errors');
const mongoose = require('mongoose');
const cors = require('cors')
const logger = require('./utils/logger');
const config = require('./utils/config');
const imageRouter = require('./controllers/images');
const middleware = require('./utils/middleware');
const usersRouter = require('./controllers/users')


mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use(express.json());
app.use(middleware.requestLogger)
app.use(cors())
app.use('/api/images', imageRouter);

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)



module.exports = app;