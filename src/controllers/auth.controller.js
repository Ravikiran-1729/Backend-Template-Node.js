const express = require('express');
const {getDB} = require('../config/db.config');


const login = async (req, res) =>{
    const db = getDB();
    const [row] = await db.execute('select 1');

    // define login here
    res.send({
        status : 200,
        message : "Login Successfully",
        data : row
    });
}

const register = (req, res) =>{
    // define login here
    res.send({
        status : 200,
        message : "Registered Successfully",
    });
}

const profile = (req, res) =>{
    // define login here
    res.send({
        status : 200,
        message : "Protected Profile Data",
        token : req.headers.authorization
    });
}


module.exports = {
    login,
    register, 
    profile
};