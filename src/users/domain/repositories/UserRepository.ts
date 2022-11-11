import { User } from '../entities/User'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserRepository {

    save(user: User): Promise<void>
    updateById(id: number, user: User): Promise<void>
    removeById(id: number): Promise<void>
    findById(id: number): Promise<User | null>
}