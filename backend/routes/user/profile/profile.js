import { Router } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const router = Router();
const { JWT_SECRET } = process.env;

router.get('/', async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    jwt.verify(token, JWT_SECRET, {}, (error, userInfo) => {
        if (error) {
            console.error('Erro ao verificar token:', error);
            return res.status(403).json({ error: 'Token inválido.' });
        }
        res.status(200).json(userInfo);
    });
});

export default router;