const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const quizeRoutes = require('./routes/quizeRoutes');
const errorHandler = require('./utils/errorHandler')



app.use(cors());
//using middlewares
app.use(express.json());


app.use('/user', userRoutes);
app.use('/quiz', quizeRoutes);

app.use(errorHandler);

module.exports = app;