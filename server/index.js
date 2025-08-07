import express from 'express';
import 'dotenv/config';
import UserRoutes from './routes/users/routes.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';

const { PORT } = process.env

const app = express()
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser());
app.use('/users', UserRoutes);



app.listen((PORT), () => {
    console.log(`Server is running on port ${PORT}`)
})