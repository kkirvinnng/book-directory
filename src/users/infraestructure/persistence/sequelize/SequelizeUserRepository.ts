import { injectable } from 'inversify'
import { User } from '../../../domain/entities/User'
import { UserRepository } from '../../../domain/repositories/UserRepository'
import { AgeVO } from '../../../domain/value-objects/Age.vo'
import { SequelizeUser } from './models/SequelizeUser'
import { usersModel } from './models/users.model'


@injectable()
export class SequelizeUserRepository implements UserRepository {

    private toDomain(persistanceUser: SequelizeUser) {
        const { Age, Location } = persistanceUser

        const age = Age ? new AgeVO(Age) : null

        return User.create(
            Location,
            age!
        )
    }

    private toPersistance(domainUser: User) {
        const { location, age } = domainUser
        return {
            Location: location,
            Age: age.value
        }
    }

    async save(user: User): Promise<void> {
        const persistUser = this.toPersistance(user)

        await usersModel.create(persistUser)
    }

    async findById(id: number): Promise<User | null> {

        const userFound = await usersModel.findOne({ where: { User_ID: id } })

        if (!userFound) return null

        const userDomain = this.toDomain(userFound)


        return userDomain
    }

    async removeById(id: number): Promise<void> {

        await usersModel.destroy({ where: { User_ID: id } })
        await usersModel.sync()

    }

    async updateById(id: number, user: User): Promise<void> {

        const persistUser = this.toPersistance(user)

        await usersModel.update(persistUser, { where: { User_ID: id } })

    }
}

