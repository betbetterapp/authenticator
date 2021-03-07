import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { createServer } from 'http';

import cors from 'cors';
require('dotenv/config');

const app = express();
const httpServer = createServer(app);

app.use(cors());
app.use(morgan(':method :url :status - :response-time[2] ms'));

app.get('/', (req, res) => {
    res.send({ available: true });
});

export default app;
