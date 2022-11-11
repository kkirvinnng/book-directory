import { Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import { CreateRatingUseCase } from '../../../../book-directory/application/use-cases/book-rating/CreateRating.usecase'
import { BookRatings } from '../../../../book-directory/domain/entities/BookRatings'
import { BookRatingVO } from '../../../../book-directory/domain/value-objects/BookRating.vo'
import { IsbnVO } from '../../../../book-directory/domain/value-objects/Isbn.vo'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { TypedRequestBody } from '../../../types/TypedExpressRequest'

@injectable()
export class CreateRatingController {
    constructor(
        @inject(ContainerSymbols.CreateRatingUseCase)
        private readonly createRating: CreateRatingUseCase
    ) { }

    async run(
        req: TypedRequestBody<{
            userId: string,
            isbn: string,
            bookRating: string
        }>,
        res: Response,
        next: NextFunction) {

        const {
            userId,
            isbn,
            bookRating
        } = req.body

        try {

            const rating = BookRatings.create({
                userId: parseInt(userId),
                isbn: IsbnVO.build(isbn),
                bookRating: BookRatingVO.build(parseInt(bookRating))
            })

            await this.createRating.run(rating)

            res.status(201).json({ success: true })
        } catch (err: unknown) {

            next()
        }
    }
}

