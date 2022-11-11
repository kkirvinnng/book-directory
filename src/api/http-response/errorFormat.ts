import { AppError } from '../../shared/domain/AppError'

export interface ErrorResponse {

    message: string,
    code: number
}

export interface ApiErrorResponse {
    success: boolean,
    error: ErrorResponse
}

export const errorFormat = (e: AppError): ApiErrorResponse => {
    const err: ErrorResponse = {
        message: e.name,
        code: e.statusCode!
    }
    return {
        success: false,
        error: err
    }
}