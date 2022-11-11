import { Request, Response, NextFunction } from 'express'
import { DeleteUserUseCase } from '../../../users/application/use-cases/DeleteUser.usecase'
import { inject, injectable } from 'inversify'
import { ContainerSymbols } from '../../../dependency-injection/symbols'

@injectable()
export class DeleteUserController {
    constructor(
        @inject(ContainerSymbols.DeleteUserUseCase)
        private readonly deleteUserUseCase: DeleteUserUseCase
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.body
        try {


            await this.deleteUserUseCase.run(userId)

            res.status(200).json({ success: true })
        } catch (err: unknown) {

            next()
        }
    }
}