import { QueryInterface } from 'sequelize'
import { booksModel } from '../../../../../book-directory/infraestructure/persistence/sequelize/models/books.models'
import { readFileCSV } from '../../../csv-parser/readFileCSV'


export = {
    up: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.sequelize.transaction(async () => {
            try {

                const books = await readFileCSV('csv-dataset/books.csv')
                console.log(books)
                await booksModel.bulkCreate(books)


            } catch (error) {
                console.log(error)
            }
        })
    },
    down: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.sequelize.transaction(async () => {
            try {
                await queryInterface.bulkDelete(booksModel.tableName, {}, {})
            } catch (error) {
                console.log(error)
            }
        })
    },
}