// src/routes/userRoutes.ts
import express from 'express';
import { validateData } from '../middleware/validationMiddleware';
import { UserRegistrationSchema, userLoginSchema } from '../schemas/userSchema';
import * as userController from '../controller/userController';

const userRouter = express.Router();


userRouter.route('/')
  .get(validateData(UserRegistrationSchema), userController.registerUser)
  .post();


// userRouter.get(':id').get()  get by param

export default userRouter;