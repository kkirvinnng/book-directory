import { injectable, inject } from 'inversify'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { Book } from '../../../domain/entities/Book'
import { BooksRepository } from '../../../domain/repositories/BooksRepository'
import { BookNotFound } from '../../errors/BookNotFound'

@injectable()
export class FindAllBooksUseCase {
    constructor(
        @inject(ContainerSymbols.SequelizeBooksRepository)
        private readonly booksRepository: BooksRepository
    ) { }

    async run(
        book: Partial<Pick<Book,
            'bookTitle'
            | 'bookAuthor'
            | 'yearOfPublication'
            | 'publisher'
        >>
    ) {

        const booksFound = await this.booksRepository.findByFilters(book)

        if (!booksFound) {
            throw new BookNotFound('No books are loaded yet')
        }

        return booksFound

    }
}