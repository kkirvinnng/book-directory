import { QueryInterface, DataTypes } from 'sequelize'
import { SequelizeUser } from '../../../../../users/infraestructure/persistence/sequelize/models/SequelizeUser'
import { usersModel } from '../../../../../users/infraestructure/persistence/sequelize/models/users.model'

export = {
    up: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.sequelize.transaction(async (transaction) => {
            return await queryInterface.createTable<SequelizeUser>(
                usersModel.tableName,
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
                    createdAt: {
                        allowNull: false,
                        type: DataTypes.DATE,
                    },
                    updatedAt: {
                        allowNull: false,
                        type: DataTypes.DATE,
                    },
                    deletedAt: {
                        type: DataTypes.DATE,
                    },
                },
                {
                    charset: 'utf8mb4',
                    collate: 'utf8mb4_unicode_ci',
                    transaction,
                }
            )
        })
    },

    down: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.sequelize.transaction(async (transaction) => {
            return await queryInterface.dropTable(usersModel.tableName, {
                transaction,
            })
        })
    },
}

