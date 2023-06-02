import { categoryModel } from "../models/category.js"

export const CategoryController = {
    getAll: async (req, res) => {
        try {
            const data = await categoryModel.find();
            return res.status(200).send(data);
        } catch (error) {
            console.log(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await categoryModel.findById(id);
            if (data)
                return res.status(200).send(data);
                else 
                return res.status(404).send({message: 'Not found'});
        } catch (error) {
            console.log(error)
        }
    },
    createPost: async (req, res) => {
        try {
            const data = await categoryModel.create(req.body);
            return res.status(200).send(data);
        } catch (error) {
            console.log(error)
        }
    },
    deleteById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await categoryModel.findByIdAndDelete(id);
            return res.status(200).send(data);
        } catch (error) {
            console.log(error)
        }
    },
}