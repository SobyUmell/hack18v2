import { NextFunction, type Request, type Response } from 'express'
import { ApiError } from '../../exceptions/api.exception.js'

export const ErrorMiddleware = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors })
  }
  return res.status(500).json({ message: 'Непредвиденная ошибка', error: err })
}
