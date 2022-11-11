import { Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import { FindBookByISBNUseCase } from '../../../../book-directory/application/use-cases/books/FindBookByISBN.usecase'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { TypedRequestQuery } from '../../../types/TypedExpressRequest'
import { mapperBookDTO } from '../DTOs/Book.dto'

@injectable()
export class FindBookByISBNController {
    constructor(
        @inject(ContainerSymbols.FindBookByISBNUseCase)
        private readonly findBookByISBNUseCase: FindBookByISBNUseCase
    ) { }

    async run(req: TypedRequestQuery<{ isbn: string }>, res: Response, next: NextFunction) {
        const isbn = req.query.isbn

        try {

            const book = await this.findBookByISBNUseCase.run(isbn)

            const bookDTO = mapperBookDTO(book)


            res.status(200).json({ success: true, book: bookDTO })
        } catch (err: unknown) {

            next()
        }
    }
}