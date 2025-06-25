import jwt from "jsonwebtoken";
import 'dotenv/config';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

export function jwtVerify(req) {

    const { token } = req.cookies

    if (token) {

        return new Promise((resolve, reject) => {
            jwt.verify(token, JWT_SECRET_KEY, {}, (error, userInfo) => {
                if (error) {
                    console.error("JWT verification failed:", error);
                    reject(error)
                }
                resolve(userInfo)
            })
        })
    }
    
    else {
        return null
    }
}

