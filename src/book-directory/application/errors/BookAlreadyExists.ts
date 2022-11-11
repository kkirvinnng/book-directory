import { AppError } from '../../../shared/domain/AppError'

export class BookAlreadyExists extends AppError {
    constructor(
        public name: string,
        public statusCode: number = 404
    ) {
        super(name, statusCode)
    }
}