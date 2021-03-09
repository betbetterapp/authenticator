import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ available: true });
});

router.get('/validate', (req, res) => {
    if (req?.user) {
        res.send({ success: true, user: req.user });
    } else {
        res.send({ success: false, user: null });
    }
});

export default router;
