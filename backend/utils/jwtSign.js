import jwt from "jsonwebtoken";
import 'dotenv/config';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

export function jwtSign(newUserObj) {

    return new Promise((resolve, reject) => {
        jwt.sign(newUserObj, JWT_SECRET_KEY, {expiresIn: '1d'}, (error, token) => {
            if (error) {
                console.error("Error signing JWT:", error);
                reject(error);
            }
            else {
                resolve(token);
            }
        })
    })
}