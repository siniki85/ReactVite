import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import  User  from '../models/User.js';

const router = express.Router();

//register a new user
router.post('/register', [
    body('fullName').not().isEmpty().withMessage("Full Name is required!"),
    body('email').isEmail().withMessage("Invalid email!"),
    body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters!")
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const { fullName, email, password } = req.body;

        // check if user already exist
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User Aleady Exist!" });

        //Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //Create New User
        user = new User({
            fullName,
            email,
            password: hashPassword
        });
        await user.save();

        //Generate JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(201).json({
            token, user:
            {
                id: user._id,
                email,
                password
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error!" });
    }
});

//Login User

router.post("/login", [
    body('email').isEmail().withMessage("Please Enter Valid Email!"),
    body('password').exists().withMessage("Password is required!")
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const { email, password } = req.body;

        //Find User By Email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid Credentials!" });

        //Compare Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials!" });

        //Generate JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(201).json({
            token, user:
            {
                id: user._id,
                email,
                password
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error!" })
    }
});

export default router;