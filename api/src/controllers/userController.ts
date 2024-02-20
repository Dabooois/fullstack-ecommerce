import {
	TUserRegistration,
	UserRegistrationSchema,
} from '../models/userSchema';

import { CustomRequest, CustomResponse } from '../utils/customType';
import { Request, Response } from 'express';
import { parseSchema } from '../utils/parseError';

export const loginUser = (req: Request, res: Response) => {
	// Handle user login logic using validated data from req.body
	res.json({ message: 'User logged in successfully', data: req.body });
};

export const registerUser = async (
	req: CustomRequest<TUserRegistration, { offset: number; limit: number }>,
	res: CustomResponse<
		{
			data: TUserRegistration;
			message: string;
			pageInfo: { offset: number; limit: number };
		},
		{ message: string }[] | string
	>
) => {
	try {
		const parsedBody = await parseSchema(UserRegistrationSchema, req.body);

		if (parsedBody.ok === false) {

			res.status(400).json({
				ok: false,
				error: parsedBody.error,
			});

		} else {
			const { email, password, username, age } = parsedBody.data;
			res.json({
				ok: true,
				data: {
					pageInfo: {
						limit: req.query.limit,
						offset: req.query.offset,
					},
					data: {
						email,
						password,
						username,
						age
					},
					message: 'hello',
				},
			});
		}




	} catch (e) {
		const result = (e as Error).message;
		res.status(400).json({
			error: result,
			ok: false,
		});
	}
};
