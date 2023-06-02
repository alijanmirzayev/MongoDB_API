import { Router } from "express";
import { body } from 'express-validator';
import { authController } from "../controllers/auth.js";
import { validate } from "../middlewares/validation.js";

const r = Router()
r.get('/', authController.getAll)
r.get('/:id', authController.getById)
r.delete('/:id', authController.deleteUserById)
r.put(
    '/:id', 
    [body('name').notEmpty().isString().withMessage('Name düzgün deyil')],
    [body('surname').notEmpty().isString().withMessage('Surname düzgün deyil')],
    [body('email').notEmpty().isString().isEmail().withMessage('Email düzgün deyil')],
    [body('password').notEmpty().isLength(4).withMessage('Password düzgün deyil')],
    authController.editUserProfile)
r.post(
    '/sign-up',
    [body('name').notEmpty().isString().withMessage('Name düzgün deyil')],
    [body('surname').notEmpty().isString().withMessage('Surname düzgün deyil')],
    [body('email').notEmpty().isString().isEmail().withMessage('Email düzgün deyil')],
    [body('password').notEmpty().isLength(4).withMessage('Password düzgün deyil')],
    validate,
    authController.createUser)
r.post(
    '/sign-in',
    [body('email').notEmpty().isString().isEmail().withMessage('Email düzgün deyil')],
    [body('password').notEmpty().isLength(4).withMessage('Password düzgün deyil')],
    validate,
    authController.signinUser)

export default r