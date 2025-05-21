import "dotenv/config";
import express from "express";
import UserRoutes from "./router/users/routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

app.use('/users', UserRoutes)

const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})