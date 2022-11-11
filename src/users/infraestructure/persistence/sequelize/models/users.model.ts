import { DataTypes } from 'sequelize'
import db from '../../../../../shared/infraestructure/persistence/sequelize/SequelizeClient'
import { SequelizeUser } from './SequelizeUser'


const usersModel = db.define<SequelizeUser>(
    'users',
    {
        User_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Location: {
            type: new DataTypes.STRING(250),

        },
        Age: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps: true, // createdAt, updatedAt
        paranoid: true, // deletedAt
    }
)

export { usersModel }