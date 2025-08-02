import express from 'express';
import 'dotenv/config';
import UserRoutes from './routes/users/routes.js'

const { PORT } = process.env

const app = express()
app.use(express.json());
app.use('/users', UserRoutes);



app.listen((PORT), () => {
    console.log(`Server is running on port ${PORT}`)
})