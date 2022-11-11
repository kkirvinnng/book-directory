import { Request, Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import { ContainerSymbols } from '../../../dependency-injection/symbols'
import { UpdateUserByIdUseCase } from '../../../users/application/use-cases/UpdateUserById.usecase'
import { User } from '../../../users/domain/entities/User'
import { AgeVO } from '../../../users/domain/value-objects/Age.vo'

@injectable()
export class UpdateUserController {
    constructor(
        @inject(ContainerSymbols.UpdateUserByIdUseCase)
        private readonly updateUserByIdUseCase: UpdateUserByIdUseCase
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        const { userId, location, age } = req.body

        try {

            const user = User.create(location, AgeVO.build(age))

            await this.updateUserByIdUseCase.run(userId, user)

            res.status(200).json({ success: true })
        } catch (err: unknown) {

            next()
        }
    }
}