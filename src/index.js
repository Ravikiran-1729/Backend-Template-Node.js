const express = require("express");
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
console.log(path.join(__dirname, "../views"));

app.use(express.static(path.join(__dirname, "../public/CSS")));
app.use(express.static(path.join(__dirname, "../public/JS")));
app.use(express.static(path.join(__dirname, "../public/Font")));
app.use(express.static(path.join(__dirname, "../public/Icons")));
app.use(express.static(path.join(__dirname, "../public/Images")));

app.use((req, res) =>{
    console.log("Request Received!");
    // res.send({
    //     statusCode : 202,
    //     status: "OK",
    //     message: "Request Received!!",
    // });
    res.render('Pages/home.ejs');
});

app.listen(PORT, ()=>{
    console.log(`Server Listening on ${PORT}`);
})