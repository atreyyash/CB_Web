const path = require('path');
const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', (req, res) => {
    console.log(req.user);
    res.render('signup');
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    try {
        let user = await User.findOne({ username });
        if (user) {
            res.render('login', {
                msg: "User Already Present"
            });
        }
        else {
            bcrypt.genSalt(saltRounds, async function (err, salt) {
                bcrypt.hash(password, salt, async function (err, hash) {
                    // Store hash in your password DB.
                    await User.create({
                        username,
                        passowrd: hash
                    });

                    res.render('login', {
                        msg: "SigUp Success"
                    });
                });
            });
        }
    }
    catch (err) {
        res.send(err);
    }
});

module.exports = router;