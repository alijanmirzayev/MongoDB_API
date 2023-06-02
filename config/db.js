import mongoose from "mongoose";
import env from 'dotenv/config'

export const dbConnect = () => {
    try {
        mongoose.connect(process.env.CONNECTION_URI)
    } catch (error) {
        console.log(error)
    }
}