import { Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import { ContainerSymbols } from '../../../dependency-injection/symbols'
import { FindUserByIdUseCase } from '../../../users/application/use-cases/FindUserById.usecase'
import { TypedRequestQuery } from '../../types/TypedExpressRequest'
import { mapperUserDTO } from './DTOs/User.dto'

@injectable()
export class UserFinderController {
    constructor(
        @inject(ContainerSymbols.FindUserByIdUseCase)
        private readonly findUserByIdUseCase: FindUserByIdUseCase
    ) { }

    async run(req: TypedRequestQuery<{ id: string }>, res: Response, next: NextFunction) {

        const id = req.query.id

        try {

            const userFound = await this.findUserByIdUseCase.run(parseInt(id))

            const userDTO = mapperUserDTO(userFound)

            res.status(200).json({ success: true, user: userDTO })
        } catch (err: unknown) {

            next()
        }
    }
}