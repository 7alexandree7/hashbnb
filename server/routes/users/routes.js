import User from '../../models/user/User.js';
import { connectDB } from '../../config/db/db.js';
import { Router } from "express";
import bcrypt from 'bcryptjs';


const router = Router()
const bcryptSalt = bcrypt.genSaltSync();

router.get('/', async (req, res) => {
    await connectDB()
    const userDoc = await User.find()
    res.json(userDoc)
});


router.post('/', async (req, res) => {
    await connectDB()

    const { name, email, password } = req.body;

    const encryptedPassord = bcrypt.hashSync(password, bcryptSalt)

    try {
        const newUserDoc = User.create({
            name,
            email,
            password: encryptedPassord
        })
        res.json(newUserDoc);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error: error.message });
    }
})


export default router;