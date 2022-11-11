import { Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import { RemoveBookByISBNUseCase } from '../../../../book-directory/application/use-cases/books/RemoveBookByISBN.usecase'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { TypedRequestQuery } from '../../../types/TypedExpressRequest'

@injectable()
export class RemoveBookByISBNController {
    constructor(
        @inject(ContainerSymbols.RemoveBookByISBNUseCase)
        private readonly removeBookByISBNUseCase: RemoveBookByISBNUseCase
    ) { }

    async run(req: TypedRequestQuery<{ isbn: string }>, res: Response, next: NextFunction) {
        const isbn = req.query.isbn

        try {

            await this.removeBookByISBNUseCase.run(isbn)


            res.status(200).json({ success: true })
        } catch (err: unknown) {

            next()
        }
    }
}