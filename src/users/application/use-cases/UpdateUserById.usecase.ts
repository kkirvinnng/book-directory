import { injectable, inject } from 'inversify'
import { ContainerSymbols } from '../../../dependency-injection/symbols'
import { User } from '../../domain/entities/User'
import { UserRepository } from '../../domain/repositories/UserRepository'
import { UserNotFound } from '../errors/UserNotFound'

@injectable()
export class UpdateUserByIdUseCase {
    constructor(
        @inject(ContainerSymbols.SequelizeUserRepository)
        private readonly userRepository: UserRepository
    ) { }

    async run(id: number, user: User) {

        const userFound = await this.userRepository.findById(id)

        if (!userFound) {
            throw new UserNotFound('The user doesnt exists')
        }

        await this.userRepository.updateById(id, user)

    }
}