import { Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import { CreateBookUseCase } from '../../../../book-directory/application/use-cases/books/CreateBook.usecase'
import { Book } from '../../../../book-directory/domain/entities/Book'
import { IsbnVO } from '../../../../book-directory/domain/value-objects/Isbn.vo'
import { UrlVO } from '../../../../book-directory/domain/value-objects/Url.vo'
import { YearVO } from '../../../../book-directory/domain/value-objects/Year.vo'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { TypedRequestBody } from '../../../types/TypedExpressRequest'

@injectable()
export class CreateBookController {
    constructor(
        @inject(ContainerSymbols.CreateBookUseCase)
        private readonly createBookUseCase: CreateBookUseCase
    ) { }

    async run(
        req: TypedRequestBody<{
            isbn: string,
            bookTitle: string,
            bookAuthor: string,
            yearOfPublication: string,
            publisher: string,
            imageURL_S: string,
            imageURL_M: string,
            imageURL_L: string,
        }>,
        res: Response,
        next: NextFunction
    ) {

        const {
            isbn,
            bookTitle,
            bookAuthor,
            yearOfPublication,
            publisher,
            imageURL_S,
            imageURL_M,
            imageURL_L,
        } = req.body

        try {

            const book = Book.create({
                isbn: IsbnVO.build(isbn),
                bookTitle,
                bookAuthor,
                yearOfPublication: YearVO.build(parseInt(yearOfPublication)),
                publisher,
                imageURL_S: UrlVO.build(imageURL_S),
                imageURL_M: UrlVO.build(imageURL_M),
                imageURL_L: UrlVO.build(imageURL_L),
            })

            await this.createBookUseCase.run(book)


            res.status(201).json({ success: true })
        } catch (err: unknown) {

            next()
        }
    }
}