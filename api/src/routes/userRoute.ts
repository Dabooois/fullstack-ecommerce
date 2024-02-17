// src/routes/userRoutes.ts
import express from 'express';
import { validateData } from '../middleware/validationMiddleware';
import { UserRegistrationSchema, userLoginSchema } from '../schemas/userSchema';
import * as userController from '../controller/userController';

const userRouter = express.Router();

userRouter.get('/', validateData(UserRegistrationSchema), userController.registerUser);
userRouter.post('/', validateData(UserRegistrationSchema), userController.registerUser);

userRouter.post('/', validateData(UserRegistrationSchema), userController.registerUser);
// userRouter.post('/login', validateData(userLoginSchema), loginUser);

export default userRouter;