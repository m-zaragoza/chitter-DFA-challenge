import express from 'express';
import { check, validationResult } from 'express-validator';
import Peep from '../models/peep.model.js';

export const router = express.Router();

router.route(`/`)
    .post([
        check(`peepBody`).exists().isLength({ max: 280 }).matches(/^[a-zA-Z0-9!?.@_', ]*$/)
    ],
        (req, res) => {
            const errors = validationResult(req);
            const peepToSave = new Peep(req.body);
            if (!errors.isEmpty()) {
                return res.status(422).json({
                    "message": "Errors in peep input",
                    "error": errors.array()
                });
            }
            peepToSave.save()
                .then(() => res.status(201).json({ "message": "Peep added successfully" }))
                .catch(err => res.status(422).json({ "message": "Failed to post peep" }));
        });