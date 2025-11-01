import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../../../model/User/User.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const router = express.Router();
const salt = bcrypt.genSaltSync(10);
const { JWT_SECRET } = process.env;

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Preencha todos os campos obrigatórios.' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'E-mail já cadastrado.' });
        }

        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const newUserObj = { name, email, _id: newUser._id };
        const token = jwt.sign(newUserObj, JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token).status(201).json(newUserObj);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário.' });
    }

});

export default router;