// IMPORT DEPENDENICIES
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const cookieParser = require("cookie-parser");
const { checkUser } = require('./middleware/authMiddleware');
require('dotenv').config({path: __dirname + '/.env'})

// APP SETUP
const app = express();

// VIEW ENGINE SETUP
app.set('view engine', 'ejs')
app.use(express.static('views'));

// MIDDLEWARES
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MONGOOSE SETUP
const url = process.env.URL
mongoose.Promise = global.Promise;
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(res => console.log("CONNECTION WITH DATABASE SUCCESSFUL")).catch(err => console.log(err))

// ROUTES
app.use('/',require('./routes/userRoutes'))

// RUN
app.listen(process.env.PORT,()=>console.log(`Listening on http://localhost:${process.env.PORT}`))