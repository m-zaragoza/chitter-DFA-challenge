import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import { router as allPeeps } from './routes/index.js';
import { router as post } from './routes/post.js';
import { router as register } from './routes/register.js';
import { router as login } from './routes/login.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(cors());
app.use(bodyParser.json());

app.use(`/`, allPeeps);
app.use(`/post`, post);
app.use(`/register`, register);
app.use(`/login`, login);


const main = async () => {
    await mongoose.connect(process.env.DB_URI).then(res => {
        console.log(`Connected to DB`)
    })
}

main().catch(err => console.log(err));

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;

    console.log(`My app is listening at http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;