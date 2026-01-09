const express = require('express');


// Authorization Middleware
const verifyToken = (req, res, next) =>{
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).render('error', {
            status : 401,
            title : "Unauthorized User?"
        });
    }
    next();
}



module.exports = {
    verifyToken
};