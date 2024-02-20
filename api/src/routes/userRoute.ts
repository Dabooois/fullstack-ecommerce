// src/routes/userRoutes.ts
import express from 'express';
import { validateData } from '../middlewares/validationMiddleware';
import { UserRegistrationSchema, userLoginSchema } from '../models/userSchema';
import * as userController from '../controllers/userController';

const userRouter = express.Router();


userRouter.route('/')
  // .get()
  .post(userController.registerUser);


// userRouter.get(':id').get()  get by param

export default userRouter;