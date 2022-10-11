import express from 'express';
import { check, validationResult } from 'express-validator';
import User from '../models/user.model.js';

export const router = express.Router();

router.route(`/`)
    .post([
        check(`peeperName`).exists().isLength({ min: 2 }).matches(/^[a-z]+$/i),
        check(`peeperLastName`).exists().isLength({ min: 2 }).matches(/^[a-z]+$/i),
        check(`userName`).exists().matches(/^[a-z0-9]+$/i),
        check(`email`).exists().isEmail().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        check(`password`).exists().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    ],
        (req, res) => {
            const errors = validationResult(req);
            const { email } = req.body;
            if (!errors.isEmpty()) {
                return res.status(422).json({
                    "message": "Errors in input data",
                    "error": errors.array()
                });
            }
            User.findOne({ email }, (err, user) => {
                if (user) {
                    res.send({ message: `Looks like this email is already registered!` })
                }
                else {
                    const userToRegister = new User(req.body);
                    userToRegister.save()
                        .then(() => res.status(201).json({ "message": "User registered successfully" }))
                        .catch(err => res.status(422).json({ "message": "Failed to register" }));
                }
            });
        });