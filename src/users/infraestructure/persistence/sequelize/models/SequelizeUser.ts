import {
    Model,
    CreationOptional,
    InferAttributes,
    InferCreationAttributes
} from 'sequelize'

export interface SequelizeUser
    extends Model<InferAttributes<SequelizeUser>, InferCreationAttributes<SequelizeUser>> {
    User_ID: CreationOptional<number>
    Location: string
    Age: number
    createdAt?: CreationOptional<Date>
    updatedAt?: CreationOptional<Date>
    deletedAt?: Date
}