import { QueryInterface, DataTypes } from 'sequelize'
import { bookRatingsModel } from '../../../../../book-directory/infraestructure/persistence/sequelize/models/bookRatings.model'
import { SequelizeBookRatings } from '../../../../../book-directory/infraestructure/persistence/sequelize/models/SequelizeBookRatings'

export = {
    up: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.sequelize.transaction(async (transaction) => {
            return await queryInterface.createTable<SequelizeBookRatings>(
                bookRatingsModel.tableName,
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
            return await queryInterface.dropTable(bookRatingsModel.tableName, {
                transaction,
            })
        })
    },
}

