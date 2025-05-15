import express from 'express';
import { connectDB } from "../../config/db.js";
import User from "../../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();
const bcryptSalt = bcrypt.genSaltSync()

router.get("/", async (req, res) => {
    connectDB()

    try {
        const userDoc = await User.find()
        res.json(userDoc)
    } catch (error) {
        res.status(500).json({ message: "User not found" })
        console.log("Error fetching users:", error);
    }
});


router.post("/", async (req, res) => {
    connectDB()

    const {name, email, password} = req.body

    if(!name || !email || !password) {
        return res.status(400).json({ message: "Please fill all fields" })
    }

    const passwordHash = bcrypt.hashSync(password, bcryptSalt)

    try {
        const newUser = await User.create({
            name,
            email,
            password: passwordHash,
        })
        res.status(201).json(newUser)
    } catch (error) {
        console.log("Error creating user:", error);
        res.status(500).json({ message: "Error creating user" })
    }
})


export default router;