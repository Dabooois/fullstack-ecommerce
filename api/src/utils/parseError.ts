import { Schema, ZodError, ZodIssue } from 'zod';
import { TOkayable } from './tokayable';

export const parseSchema = async <T>(
	schema: Schema,
	input: T
): Promise<TOkayable<T, { message: string }[]>> => {
	try {
		const body = schema.parse(input);

		return {
			ok: true,
			data: body,
		};

	} catch (error) {
		if (error instanceof ZodError) {
			const errorMessages = error.errors.map((issue: ZodIssue) => {
				console.log("------------",issue)
				return {
					message: issue.message
				}


			});
			return {
				ok: false,
				error: errorMessages,
			};
		}
		return {
			ok: false,
			error: [],
		};
	}
};




	const formatZodIssue = (issue: ZodIssue): string => {
    const { path, message } = issue
    const pathString = path.join('.')

    return `${pathString} ${message}`
}
