import { Request, Response } from 'express'
import { TOkayable } from './TOkayable'


export type CustomRequest<T, E> = Request<any, any, T, E>

export type CustomResponse<T,E> = Response<TOkayable<T, E>>