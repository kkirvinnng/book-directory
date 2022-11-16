import { Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import { FindAllRatingsByISBNUseCase } from '../../../../book-directory/application/use-cases/book-rating/FindAllRatingsByISBN.usecase'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { TypedRequestQuery } from '../../../types/TypedExpressRequest'
import { mapperRatingDTO } from '../DTOs/Rating.dto'

@injectable()
export class FindAllRatingsByISBNController {
    constructor(
        @inject(ContainerSymbols.FindAllRatingsByISBNUseCase)
        private readonly findAllRatingsByISBN: FindAllRatingsByISBNUseCase
    ) { }

    async run(req: TypedRequestQuery<{ isbn: string }>, res: Response, next: NextFunction) {
        const isbn = req.query.isbn

        try {

            const ratings = await this.findAllRatingsByISBN.run(isbn)

            const ratingsDTO = ratings.map(rating => {
                return mapperRatingDTO(rating)
            })

            res.status(201).json({ success: true, book_ratings: ratingsDTO })
        } catch (err: unknown) {

            next()
        }
    }
}

