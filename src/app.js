const express = require("express");
const path = require('path');


// create app
const app = express();


// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


// Parses URL-encoded form data (e.g., submitted via HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parses incoming JSON request bodies (e.g., API requests)
app.use(express.json());


// serve static files
app.use(express.static(path.join(__dirname, "../public")));

// routes
app.use('/auth', require('./routes/auth.route'));


// home route
app.get('/home', (req, res) =>{
    console.log("Request Received!");
    res.status(200).render('Pages/home.ejs');
});


// 404 handler (unknown routes)
app.use((req, res)=>{
    return res.status(404).render('error', {
        status : 404,
        title : "Page Not Found"
    });
});


// require error.middleware
const errorMiddleware = require('./middlewares/error.middleware');

// runtime error handler (Must be LAST)
app.use(errorMiddleware);



module.exports = app;