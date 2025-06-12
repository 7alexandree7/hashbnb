import express from 'express';
import { connectDB } from "../../config/db.js";
import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config';

const router = express.Router();
const bcryptSalt = bcrypt.genSaltSync()
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

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

router.get("/profile", async (req, res) => {

    const { token } = req.cookies

    if (token) {

        jwt.verify(token, JWT_SECRET_KEY, {}, (error, userInfo) => {
            if (error) {
                throw error
            }
            res.json(userInfo)
        })
    }

    else {
        res.status(401).json({ message: "Unauthorized" })
    }

});



router.post("/", async (req, res) => {
    connectDB()

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please fill all fields" })
    }

    const passwordHash = bcrypt.hashSync(password, bcryptSalt)

    try {
        const newUserDoc = await User.create({
            name,
            email,
            password: passwordHash,
        })

        const newUserObj = { name, email, id: newUserDoc._id }

        jwt.sign(newUserObj, JWT_SECRET_KEY, {}, (error, token) => {
            if (error) {
                throw error
            }
            res.cookie("token", token).status(200).json(newUserObj)
        })
        

    } catch (error) {
        console.log("Error creating user:", error);
        res.status(500).json({ message: "Error creating user" })
    }
})


router.post("/login", async (req, res) => {
    connectDB()

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all fields" })
    }

    const userDoc = await User.findOne({ email })

    if (!userDoc) {
        return res.status(404).json({ message: "User not found" })
    }

    const passwordCorrect = bcrypt.compareSync(password, userDoc.password)

    if (!passwordCorrect) {
        return res.status(401).json({ message: "Invalid credentials" })
    }

    const newUserObj = {
        name: userDoc.name,
        email: userDoc.email,
        id: userDoc._id,
    }

    const token = jwt.sign(newUserObj, JWT_SECRET_KEY, {}, () => { })

    res.cookie("token", token).status(200).json(newUserObj)
})


router.post("/logout", (req, res) => {
    res.clearCookie("token").status(200).json({message: "Logged out successfully"})
})


export default router;
