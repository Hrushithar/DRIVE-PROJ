const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const user = require('../models/user.model');
const jwt = require('jsonwebtoken');


router.get('/register', (req, res) => {
  res.render('register');
})

router.post('/register',
    body('email').trim().isEmail().isLength({ min: 13 }),
    body('password').trim().isLength({ min: 6 }),
    body('username').trim().isLength({ min: 3 }),
  async(req, res) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(),
        message: 'Validation failed. Please check your input.'
       });
    }
    
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    await newUser.save();

    res.json(newUser);
  
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login',
    body('username').trim().isLength({ min: 3 }),
    body('password').trim().isLength({ min: 6 }),
    async(req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(),
                message: 'Validation failed. Please check your input.'
            });
        }

        const { username, password } = req.body;
        const user = await userModel.findOne({ username: username });
        if(!user) {
            return res.status(404).json({ message: 'username or password is incorrect' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(404).json({ message: 'username or password is incorrect' });
        }

        const token = jwt.sign({
            userId: user._id,
            email: user.email,
            username: user.username
        },
        process.env.JWT_SECRET,
        )

        res.cookie('token', token)

        res.send("logged in successfully");

    }   
);

module.exports = router;