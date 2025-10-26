import { Router } from 'express'
import bcrypt from 'bcryptjs'
import User from '../../model/User/User.js'
import { connectDB } from '../../config/db.js'

const salt = bcrypt.genSaltSync(10)
const router = Router()

router.get('/', async (req, res) => {

    try {
        await connectDB()
        const users = await User.find()
        res.json(users)

    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuarios' })
    }
})


router.post('/', async (req, res) => {
    try {
        await connectDB()

        const { name, email, password } = req.body
        const encryptPassword = bcrypt.hashSync(password, salt)

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Por favor, preencha todos os campos obrigatórios.' })
        }


        const newUser = await User.create(
            {
                name,
                email,
                password: encryptPassword
            }
        )

        return res.status(201).json(newUser)

    } catch (error) {
        console.error('Erro ao criar usuário:', error)
        return res.status(500).json({ error: 'Erro ao criar usuário.' })
    }
});


export default router