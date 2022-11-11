import { AppError } from '../../../shared/domain/AppError'

export class BookNotFound extends AppError {
    constructor(
        public name: string,
        public statusCode: number = 404
    ) {
        super(name, statusCode)
    }
}