import { Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import { FindAllRatingsByUserIdUseCase } from '../../../../book-directory/application/use-cases/book-rating/FindAllRatingsByUserId.usecase'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { TypedRequestQuery } from '../../../types/TypedExpressRequest'
import { mapperRatingDTO } from '../DTOs/Rating.dto'

@injectable()
export class FindAllRatingsByUserIdController {
    constructor(
        @inject(ContainerSymbols.FindAllRatingsByUserIdUseCase)
        private readonly findAllRatingsByUserId: FindAllRatingsByUserIdUseCase
    ) { }

    async run(
        req: TypedRequestQuery<{ userId: string }>,
        res: Response,
        next: NextFunction
    ) {
        const userId = req.query.userId

        try {

            const ratings = await this.findAllRatingsByUserId.run(parseInt(userId))

            const ratingsDTO = ratings.map(rating => {
                return mapperRatingDTO(rating)
            })

            res.status(201).json({ success: true, book_ratings: ratingsDTO })
        } catch (err: unknown) {

            next()
        }
    }
}

