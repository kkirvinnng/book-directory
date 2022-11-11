import { injectable, inject } from 'inversify'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { BookRatings } from '../../../domain/entities/BookRatings'
import { BookRatingsRepository } from '../../../domain/repositories/BookRatingsRepository'



@injectable()
export class CreateRatingUseCase {
    constructor(
        @inject(ContainerSymbols.SequelizeBookRatingsRepository)
        private readonly bookRatingsRepository: BookRatingsRepository
    ) { }

    async run(book: BookRatings) {

        /**
         * Multiple ratings for the same user and isbn  
         */
        await this.bookRatingsRepository.save(book)

    }
}