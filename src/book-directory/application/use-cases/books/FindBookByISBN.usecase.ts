import { injectable, inject } from 'inversify'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { BooksRepository } from '../../../domain/repositories/BooksRepository'
import { IsbnVO } from '../../../domain/value-objects/Isbn.vo'
import { BookNotFound } from '../../errors/BookNotFound'



@injectable()
export class FindBookByISBNUseCase {
    constructor(
        @inject(ContainerSymbols.SequelizeBooksRepository)
        private readonly booksRepository: BooksRepository
    ) { }

    async run(isbn: string) {

        const isbnVO = IsbnVO.build(isbn)

        const bookFound = await this.booksRepository.findByISBN(isbnVO)

        if (!bookFound) {
            throw new BookNotFound('The book doenst exists')
        }

        return bookFound

    }
}