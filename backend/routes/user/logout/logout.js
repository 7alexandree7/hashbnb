import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
    res.clearCookie('token').json({ message: 'Logout successful' });
})

export default router;