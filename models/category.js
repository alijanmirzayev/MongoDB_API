import mongoose, { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String
    }
}, {
    versionKey: false,
    timestamps: true
})

export const categoryModel = model('category', categorySchema);