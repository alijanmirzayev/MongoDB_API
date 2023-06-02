import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

export const userModel = model('user', userSchema)