import { Request, Response, NextFunction } from 'express'
import { CreateUserUseCase } from '../../../users/application/use-cases/CreateUser.usecase'
import { inject, injectable } from 'inversify'
import { ContainerSymbols } from '../../../dependency-injection/symbols'

@injectable()
export class CreateUserController {
    constructor(
        @inject(ContainerSymbols.CreateUserUseCase)
        private readonly createUserUseCase: CreateUserUseCase
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        const { location, age } = req.body
        try {

            await this.createUserUseCase.run(location, age)


            res.status(201).json({ success: true })
        } catch (err: unknown) {
            (err)
            next()
        }
    }
}