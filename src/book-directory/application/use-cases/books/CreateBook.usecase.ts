import { injectable, inject } from 'inversify'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { Book } from '../../../domain/entities/Book'
import { BooksRepository } from '../../../domain/repositories/BooksRepository'
import { BookAlreadyExists } from '../../errors/BookAlreadyExists'



@injectable()
export class CreateBookUseCase {
    constructor(
        @inject(ContainerSymbols.SequelizeBooksRepository)
        private readonly booksRepository: BooksRepository
    ) { }

    async run(book: Book) {


        const bookFound = await this.booksRepository.findByISBN(book.isbn)

        if (bookFound) {
            throw new BookAlreadyExists('The book already exists')
        }

        return await this.booksRepository.save(book)

    }
}