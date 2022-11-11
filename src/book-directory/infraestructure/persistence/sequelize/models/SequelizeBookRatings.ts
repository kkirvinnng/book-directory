import {
    Model,
    CreationOptional,
    InferAttributes,
    InferCreationAttributes,
    ForeignKey
} from 'sequelize'
import { SequelizeUser } from '../../../../../users/infraestructure/persistence/sequelize/models/SequelizeUser'
import { SequelizeBooks } from './SequelizeBooks'

export interface SequelizeBookRatings
    extends Model<InferAttributes<SequelizeBookRatings>, InferCreationAttributes<SequelizeBookRatings>> {

    id: CreationOptional<number>
    User_ID: ForeignKey<SequelizeUser['User_ID']>
    ISBN: ForeignKey<SequelizeBooks['ISBN']>
    Book_Rating: number
    createdAt?: CreationOptional<Date>
    updatedAt?: CreationOptional<Date>
    deletedAt?: Date
}
