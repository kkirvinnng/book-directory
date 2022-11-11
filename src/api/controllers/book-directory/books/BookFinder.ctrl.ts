import { Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import { FindAllBooksUseCase } from '../../../../book-directory/application/use-cases/books/FindAllBooks.usecase'
import { YearVO } from '../../../../book-directory/domain/value-objects/Year.vo'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { TypedRequestQuery } from '../../../types/TypedExpressRequest'
import { mapperBookDTO } from '../DTOs/Book.dto'

@injectable()
export class BookFinderController {
    constructor(
        @inject(ContainerSymbols.FindAllBooksUseCase)
        private readonly findAllBooks: FindAllBooksUseCase
    ) { }

    async run(req: TypedRequestQuery<{
        bookTitle: string,
        bookAuthor: string,
        yearOfPublication: string,
        publisher: string
    }>, res: Response, next: NextFunction) {

        const {
            bookTitle,
            bookAuthor,
            yearOfPublication,
            publisher
        } = req.query

        try {

            const books = await this.findAllBooks.run({
                bookTitle,
                bookAuthor,
                yearOfPublication: yearOfPublication ? YearVO.build(parseInt(yearOfPublication)) : undefined,
                publisher
            })

            const booksDTO = books.map(book => {
                return mapperBookDTO(book)
            })


            res.status(200).json({ success: true, books: booksDTO })
        } catch (err: unknown) {

            next()
        }
    }
}

