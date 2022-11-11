import { injectable, inject } from 'inversify'
import { ContainerSymbols } from '../../../dependency-injection/symbols'
import { UserRepository } from '../../domain/repositories/UserRepository'
import { UserNotFound } from '../errors/UserNotFound'

@injectable()
export class DeleteUserUseCase {
    constructor(
        @inject(ContainerSymbols.SequelizeUserRepository)
        private readonly userRepository: UserRepository
    ) { }

    async run(id: number) {

        const userFound = await this.userRepository.findById(id)

        if (!userFound) {
            throw new UserNotFound('The user doesnt exists')
        }

        return await this.userRepository.removeById(id)

    }
}