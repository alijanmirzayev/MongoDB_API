import { Router } from 'express';
import { CategoryController } from '../controllers/category.js';
import { body } from 'express-validator';
import { validate } from '../middlewares/validation.js';

const r = Router()

r.get('/', CategoryController.getAll)
r.get('/:id', CategoryController.getById)
r.post(
    '/',
    [body('name').notEmpty().isString().isLength(3,10).withMessage("Name alanı uygun değil!")],
    [body('description').notEmpty().isString().isLength(3).withMessage("Description alanı uygun değil!")],
    validate,
    CategoryController.createPost)
r.delete('/:id', CategoryController.deleteById)

export default r