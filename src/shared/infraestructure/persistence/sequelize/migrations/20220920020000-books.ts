import { QueryInterface, DataTypes } from 'sequelize'
import { booksModel } from '../../../../../book-directory/infraestructure/persistence/sequelize/models/books.models'
import { SequelizeBooks } from '../../../../../book-directory/infraestructure/persistence/sequelize/models/SequelizeBooks'

export = {
    up: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.sequelize.transaction(async (transaction) => {
            return await queryInterface.createTable<SequelizeBooks>(
                booksModel.tableName,
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
            return await queryInterface.dropTable(booksModel.tableName, {
                transaction,
            })
        })
    },
}

