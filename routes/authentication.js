const express = require('express');
const router = express.Router();
const {errors, getErrorResponse} = require('../config/responseCode');

router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})

router.post('/login', (req, res) => {
    let sessionData = {
        id: 1,
        email: 'admin@gmail.com',
        firstName: 'John',
        lastName: 'Doe'
    };

    req.session.user = sessionData;

    return res.status(200).json({
        code:200, 
        message:"Login successful", 
        description: "LOGIN_SUCCESSFUL", 
        data: sessionData
    });
})

router.post('/authenticate', (req, res) => {
    if (req.session.user) {
        res.status(200).json({code:200, message:"Authenticated", description: "AUTHENTICATED", data: req.session.user});
    } else {
        res.status(401).json(getErrorResponse(errors.UNAUTHORIZED));
    }
})

module.exports = router;