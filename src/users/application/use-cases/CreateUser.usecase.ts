import { injectable, inject } from 'inversify'
import { ContainerSymbols } from '../../../dependency-injection/symbols'
import { InvalidFormatVO } from '../../../shared/domain/value-objects/InvalidFormatVO'
import { User } from '../../domain/entities/User'
import { UserRepository } from '../../domain/repositories/UserRepository'
import { AgeVO } from '../../domain/value-objects/Age.vo'
import { UserNotCreated } from '../errors/UserNotCreated'

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject(ContainerSymbols.SequelizeUserRepository)
        private readonly userRepository: UserRepository
    ) { }

    async run(location: string, age: number) {

        try {
            const ageVO = AgeVO.build(age)

            const user = User.create(location, ageVO)

            return await this.userRepository.save(user)
        } catch (err) {

            if (err instanceof InvalidFormatVO) {
                throw new UserNotCreated('')

            }
            throw err
        }
    }
}