import { Router } from 'express'
import bcrypt from 'bcryptjs'
import User from '../../model/User/User.js'
import { connectDB } from '../../config/db.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const salt = bcrypt.genSaltSync(10)
const router = Router()
const { JWT_SECRET } = process.env

router.get('/', async (req, res) => {

    try {
        await connectDB()
        const users = await User.find()
        res.json(users)

    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuarios' })
    }
})

router.get('/profile', async (req, res) => {

    const { token } = req.cookies

    if (!token) {
        return res.status(401).json({ error: 'Usuário não autenticado.' })
    }

    try {
        const userInfo = jwt.verify(token, JWT_SECRET)
        res.status(200).json(userInfo)
    } catch (error) {
        res.status(401).json({ error: 'Token inválido.' })
    }
})


router.post('/register', async (req, res) => {
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

        const newUserObj = {name, email, _id: newUser._id}
        const token = jwt.sign(newUserObj, JWT_SECRET, { expiresIn: '7d' })
        return res.cookie('token', token).status(201).json(newUser)

    } catch (error) {
        return res.status(500).json({ error: 'Erro ao criar usuário.' })
    }
});


router.post('/login', async (req, res) => {
    try {
        await connectDB()

        const {email, password} = req.body

        if(!email || !password) {
            return res.status(400).json({error: 'Por favor, preencha todos os campos obrigatórios.'})
        }

        const user = await User.findOne({ email })
        const { name , _id } = user
        const newUserObj = { name, email, _id }
        const token = jwt.sign(newUserObj, JWT_SECRET, {expiresIn: '7d'})

        const passwordCorrect = bcrypt.compareSync(password, user.password)

        if(!passwordCorrect) {
            return res.status(401).json({ error: 'Senha incorreta.' })
        }

        if(!user) {
            return res.status(404).json({ error: 'Usuário não encontrado.' })
        }

        return res.cookie('token', token).status(200).json(newUserObj)

    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login.' })
    }
})


export default router