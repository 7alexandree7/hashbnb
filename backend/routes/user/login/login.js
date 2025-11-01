import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../../../model/User/User.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const router = express.Router();
const { JWT_SECRET } = process.env;

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userDoc = await User.findOne({ email });
        if (!userDoc) {
            return res.status(400).json('Usuário não encontrado!');
        }

        const passwordCorrect = bcrypt.compareSync(password, userDoc.password);
        if (!passwordCorrect) {
            return res.status(400).json('Senha inválida!');
        }

        const { name, _id } = userDoc;
        const newUserObj = { name, email, _id };
        const token = jwt.sign(newUserObj, JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token).status(200).json(newUserObj);

    } catch (error) {
        console.error(error);
        res.status(500).json('Erro interno no servidor.');
    }
});

export default router;