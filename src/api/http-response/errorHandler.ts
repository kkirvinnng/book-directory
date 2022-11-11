import {  Request, Response } from 'express'
import { AppError } from '../../shared/domain/AppError'
import logger from '../../shared/infraestructure/logger/Winston'

import { errorFormat } from './errorFormat'

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response
) => {

    if (err instanceof AppError) {
        logger.error(`❗ ${err.name}`)
        const errorResponse = errorFormat(err)
        return res.status(err.statusCode!).json(errorResponse)
    }

    logger.error('Unhandled 👎:', err)
    return res.status(500).json({ success: false, error: err })
}
