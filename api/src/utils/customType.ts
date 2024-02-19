import { Request, Response } from 'express'
import { TOkayable } from './tokayable'



export type CustomRequest<T, E> = Request<any, any, T, E>

export type CustomResponse<T,E> = Response<TOkayable<T, E>>