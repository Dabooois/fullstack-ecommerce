
import { TUserRegistration } from '../schemas/userSchema';
import { CustomRequest, CustomResponse } from '../utils/customType';
import { Request, Response } from 'express';


export const loginUser = (req: Request, res: Response) => {
  // Handle user login logic using validated data from req.body
  res.json({ message: 'User logged in successfully', data: req.body });
};



export const registerUser = (req: CustomRequest<TUserRegistration, any>, res: CustomResponse<{ data: TUserRegistration, message: string }, Error>) => {

  res.json({
    ok: true,
    data: {
      data: req.body,
      message: 'hello'
    }
  });
};

