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
        const { _id } = user
        const userDoc = { email, _id, name: user.name}
        const passwordCorrect = bcrypt.compareSync(password, user.password)

        if(!passwordCorrect) {
            return res.status(401).json({ error: 'Senha incorreta.' })
        }

        if(!user) {
            return res.status(404).json({ error: 'Usuário não encontrado.' })
        }

        return res.status(200).json(userDoc)

    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login.' })
    }
})


export default router