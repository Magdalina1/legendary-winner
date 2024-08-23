import express from 'express';
import { body } from 'express-validator';
import * as userController from '../controllers/userController.mjs'; // Adjust path and extension as needed

const router = express.Router();

// Validation middleware
const validateUser = [
    body('name').isString().notEmpty().withMessage('Name is required and should be a string.'),
    body('email').isEmail().withMessage('A valid email is required.'),
];

// Route to create a user with validation
router.post('/', validateUser, userController.createUser);

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get a single user by ID
router.get('/:id', userController.getUserById);

// Route to update a user by ID
router.put('/:id', validateUser, userController.updateUser);

// Route to delete a user by ID
router.delete('/:id', userController.deleteUser);

export default router;
