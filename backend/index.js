import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import routes from './routes/index.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))

const { PORT } = process.env

app.use("/v1", routes)

app.listen(PORT, () => {
    console.log(`Servidor esta rodando na porta ${PORT}`)
})