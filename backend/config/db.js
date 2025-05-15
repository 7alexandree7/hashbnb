import "dotenv/config";
import mongoose from "mongoose";

const password = process.env.PASSWORD;


export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://alexandre020602:${password}@cluster0.cphvix9.mongodb.net/hashbnb?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}


