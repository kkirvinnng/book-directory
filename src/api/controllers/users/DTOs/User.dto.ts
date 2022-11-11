import { User } from '../../../../users/domain/entities/User'

export interface UserDTO {
    location: string,
    age: number,
}

export const mapperUserDTO = (user: User) => {

    const dto: UserDTO = {
        location: user.location,
        age: user.age.value
    }

    return dto
}
