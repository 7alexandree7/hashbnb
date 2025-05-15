import "dotenv/config";
import express from "express";
import UserRoutes from "./router/users/routes.js";



const app = express();

app.use(express.json());
app.use('/users', UserRoutes)

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})