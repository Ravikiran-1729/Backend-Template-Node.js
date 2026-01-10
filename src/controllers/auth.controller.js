const express = require('express');
const authService = require('../services/auth.service');

const login = async (req, res) =>{
    // define login here

    const data = await authService.findUser();

    res.send({
        status : 200,
        message : "Login Successfully",
        data : data
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