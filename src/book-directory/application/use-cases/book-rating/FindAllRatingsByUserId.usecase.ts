import { injectable, inject } from 'inversify'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { BookRatingsRepository } from '../../../domain/repositories/BookRatingsRepository'
import { BookNotFound } from '../../errors/BookNotFound'


@injectable()
export class FindAllRatingsByUserIdUseCase {
    constructor(
        @inject(ContainerSymbols.SequelizeBookRatingsRepository)
        private readonly bookRatingsRepository: BookRatingsRepository
    ) { }

    async run(userId: number) {


        const booksRatings = await this.bookRatingsRepository.findAllByUserId(userId)

        if (!booksRatings) {
            throw new BookNotFound('No ratings were found for this user')
        }

        return booksRatings

    }
}