const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./config/mongoose-connection');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const indexRouter = require('./routes/index');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();


const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname , "public")));
app.use(session({
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: false,
  }));
app.use(flash())

// configuiring routers for each route
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter);


app.listen(3000);