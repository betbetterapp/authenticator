import express from 'express';
import GoogleRouter from './third-party/google.js';
import BasicRouter from './basic.js';
const router = express.Router();

router.use('/basic', BasicRouter);
router.use('/google', GoogleRouter);
router.get('/', (req, res) => {
    res.send({ available: true });
});

export default router;
