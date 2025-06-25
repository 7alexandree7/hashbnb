import "dotenv/config";
import express from "express";
import UserRoutes from "./router/users/routes.js";
import PlaceRoutes from "./router/Places/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(cookieParser())

app.use('/users', UserRoutes)
app.use('/places', PlaceRoutes)

const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})