import express from 'express';
import User from '../../../model/User/User.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
});

export default router;