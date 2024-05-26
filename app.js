const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const quizeRoutes = require('./routes/quizeRoutes');
const errorHandler = require('./utils/errorHandler')



app.use(cors({
    origin: 'https://friendly-croissant-c9388c.netlify.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));


//using middlewares
app.use(express.json());


app.use('/user', userRoutes);
app.use('/quiz', quizeRoutes);

app.use(errorHandler);

module.exports = app;