import express from 'express';
import { check, validationResult } from 'express-validator';
import User from '../models/user.model.js';

export const router = express.Router();

router.route(`/`)
    .post([
        check(`email`).exists().isEmail().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        check(`password`).exists().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    ],
        (req, res) => {
            const errors = validationResult(req);
            const { email, password } = req.body;
            if (!errors.isEmpty()) {
                return res.status(422).json({
                    "message": "Errors in input data",
                    "error": errors.array()
                });
            }
            User.findOne({ email }, (err, user) => {
                if (user && password === user.password) {
                    res.status(200).send({ message: `Welcome back!`, user });
                }
                else {
                    res.send({ message: `Oops, details not found` });
                }
            });
        });