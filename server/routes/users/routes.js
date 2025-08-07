import User from '../../models/user/User.js';
import { connectDB } from '../../config/db/db.js';
import { Router } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import "dotenv/config";

const router = Router()
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRET_KEY } = process.env;

router.get('/', async (req, res) => {
    await connectDB()
    const userDoc = await User.find()
    res.json(userDoc)
})

router.get('/profile', async (req, res) => {
    const { token } = req.cookies;
    
    if (token) {
        try {
            const userInfo = jwt.verify(token, JWT_SECRET_KEY); 
            res.json(userInfo);
        } catch (error) {
            res.status(401).json({ message: 'Token inválido ou expirado' });
        }
    }
    else {
        res.status(401).json({ message: 'Usuário não autenticado' });
    }
});


router.post('/register', async (req, res) => {
    await connectDB()

    const { name, email, password } = req.body;

    const encryptedPassord = bcrypt.hashSync(password, bcryptSalt)

    try {
        const newUserDoc = User.create({
            name,
            email,
            password: encryptedPassord
        })

        const { _id } = newUserDoc;
        const newUserObj = { name, email, _id };
        const token = jwt.sign(newUserObj, JWT_SECRET_KEY);
        res.cookie('token', token).json(newUserObj);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error: error.message });
    }
})


router.post('/login', async (req, res) => {
    await connectDB()

    const { email, password } = req.body

    try {
        const userDoc = await User.findOne({ email })

        if (!userDoc) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const passwordCorrect = bcrypt.compareSync(password, userDoc.password)
        const { name, _id } = userDoc

        if (passwordCorrect) {
            const newUserObj = { name, email, _id }
            const token = jwt.sign(newUserObj, JWT_SECRET_KEY)
            res.cookie('token', token).json(newUserObj)
        }
        else {
            res.status(400).json({ message: 'Senha incorreta' });
        }       
    }
    catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'erro ao logar' });
    }
})


export default router;