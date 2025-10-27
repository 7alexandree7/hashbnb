import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import routes from './routes/index.js'

const app = express()
app.use(express.json())
app.use(cors())

const { PORT } = process.env

app.use("/v1", routes)

app.listen(PORT, () => {
    console.log(`Servidor esta rodando na porta ${PORT}`)
})