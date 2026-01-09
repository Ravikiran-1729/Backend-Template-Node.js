const express = require("express");
const router = express.Router();

const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');


// Login route
router.post("/login", authController.login);

// Register route
router.post('/register', authController.register);


// Profile protected route
router.get('/profile', 
    authMiddleware.verifyToken,
    authController.profile
);



module.exports = router;