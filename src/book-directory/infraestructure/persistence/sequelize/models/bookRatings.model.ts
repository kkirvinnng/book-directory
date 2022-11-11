import { DataTypes } from 'sequelize'
import db from '../../../../../shared/infraestructure/persistence/sequelize/SequelizeClient'
import { SequelizeBookRatings } from './SequelizeBookRatings'

const bookRatingsModel = db.define<SequelizeBookRatings>(
    'book_ratings',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        User_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ISBN: {
            type: new DataTypes.STRING(13),
            allowNull: false,
        },
        Book_Rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: true, // createdAt, updatedAt
        paranoid: true, // deletedAt
    }
)

export { bookRatingsModel }