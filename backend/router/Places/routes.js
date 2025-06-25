import express from 'express';
import { connectDB } from "../../config/db.js";
import Place from '../../models/Place.js'
import { jwtVerify } from '../../utils/jwtVerify.js';

const router = express.Router();

router.post('/', async (req, res) => {
    connectDB()

    const {title, city, photos, description, extras, perks, price, checkin, checkout, guests} = req.body;

    try {

        const userDoc = await jwtVerify(req)


        const newPlaceDoc = await Place.create({
            owner: userDoc._id,
            title,
            city,
            photos,
            description,
            extras,
            perks,
            price,
            checkin,
            checkout,
            guests
        })

        res.status(201).json(newPlaceDoc);
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server Error"});
    }
})


export default router;