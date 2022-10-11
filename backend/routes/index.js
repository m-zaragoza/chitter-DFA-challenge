import express from 'express';
import Peep from '../models/peep.model.js';

export const router = express.Router();

router.route(`/`)
    .get((req, res) => {

        Peep.find().sort({ peepPosted: -1 }).find((error, peeps) => {
            error ? res.status(404).send(`Peeps not found`) : res.json(peeps);
        });
    });
