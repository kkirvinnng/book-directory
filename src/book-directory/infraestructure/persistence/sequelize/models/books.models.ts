import { DataTypes } from 'sequelize'
import db from '../../../../../shared/infraestructure/persistence/sequelize/SequelizeClient'
import { SequelizeBooks } from './SequelizeBooks'

const booksModel = db.define<SequelizeBooks>(
    'books',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ISBN: {
            type: new DataTypes.STRING(13),
            allowNull: false
        },
        Book_Title: {
            type: new DataTypes.STRING(255),
        },
        Book_Author: {
            type: new DataTypes.STRING(255),
        },
        Publisher: {
            type: new DataTypes.STRING(255),
        },
        Year_Of_Publication: {
            type: DataTypes.INTEGER,
        },
        Image_URL_S: {
            type: new DataTypes.STRING(255),
        },
        Image_URL_M: {
            type: new DataTypes.STRING(255),
        },
        Image_URL_L: {
            type: new DataTypes.STRING(255),
        },
    },
    {
        timestamps: true, // createdAt, updatedAt
        paranoid: true, // deletedAt
    }
)

export { booksModel }