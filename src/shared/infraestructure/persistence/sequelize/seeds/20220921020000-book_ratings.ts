import { QueryInterface } from 'sequelize'
import { bookRatingsModel } from '../../../../../book-directory/infraestructure/persistence/sequelize/models/bookRatings.model'
import { readFileCSV } from '../../../csv-parser/readFileCSV'


export = {
    up: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.sequelize.transaction(async () => {
            try {

                const bookRatings = await readFileCSV('csv-dataset/ratings.csv')
                console.log(bookRatings)

                await bookRatingsModel.bulkCreate(bookRatings)


            } catch (error) {
                console.log(error)
            }
        })
    },
    down: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.sequelize.transaction(async () => {
            try {
                await queryInterface.bulkDelete(bookRatingsModel.tableName, {}, {})
            } catch (error) {
                console.log(error)
            }
        })
    },
}