const express = require('express');
const colors = require('colors');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = require('./api/routers/routers');
const mongoDBConnection = require('./api/config/db');
const errorHandler = require('./api/middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:3000'],
}));

app.use('/api/v1/cb', router)


app.use(errorHandler)


app.listen(process.env.PORT || 5000,()=>{
    mongoDBConnection()
    console.log(`server is runign`.bgGreen.white);
})