import {
    Model,
    CreationOptional,
    InferAttributes,
    InferCreationAttributes
} from 'sequelize'

export interface SequelizeBooks
    extends Model<InferAttributes<SequelizeBooks>, InferCreationAttributes<SequelizeBooks>> {

    id: CreationOptional<number>
    ISBN: string
    Book_Title: string
    Book_Author: string
    Year_Of_Publication: number
    Publisher: string
    Image_URL_S: string
    Image_URL_M: string
    Image_URL_L: string
    createdAt?: CreationOptional<Date>
    updatedAt?: CreationOptional<Date>
    deletedAt?: Date
}