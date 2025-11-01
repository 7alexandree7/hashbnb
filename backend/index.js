import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import routes from './routes/routes.js'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))

const { PORT } = process.env

app.use("/v1", routes)

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        });
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error)
        process.exit(1)
    });