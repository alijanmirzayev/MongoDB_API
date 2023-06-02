import { userModel } from "../models/user.js"

export const authController = {
    getAll: async (req, res) => {
        try {
            const data = await userModel.find()
            return res.status(200).send(data)
        } catch (error) {
            console.log(error)
        }
    },
    getById: async (req, res) => {
        const { id } = req.body
        const data = await userModel.findById(id)
        if (data) {
            return res.status(200).send(data)
        }
        return res.status(404).send('User not found')
    },
    deleteUserById: async (req, res) => {
        const { id } = req.body
        const data = await userModel.findByIdAndDelete(id)
        return res.status(200).send(data)
    },
    editUserProfile: async (req, res) => {
        const {id} = req.params
        const data = await userModel.findByIdAndUpdate(id, req.body)
    },
    createUser: async (req, res) => {
        try {
            const data = await userModel.create(req.body)
            return res.status(201).send(data)
        } catch (error) {
            console.log(error)
        }
    },
    signinUser: async (req, res) => {
        try {
            const { email, password } = req.body
            const data = await userModel.find({ email });
            if (data[0].password == password)
                return res.status(200).send('Sign in is success!');
            else
                return res.status(301).send('Email or passwor is wrong!');
        } catch (error) {
            console.log(error)
        }
    }
}