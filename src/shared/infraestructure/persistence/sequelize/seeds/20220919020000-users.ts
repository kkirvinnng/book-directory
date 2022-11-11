import { QueryInterface } from 'sequelize'
import { usersModel } from '../../../../../users/infraestructure/persistence/sequelize/models/users.model'
import { readFileCSV } from '../../../csv-parser/readFileCSV'


export = {
    up: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.sequelize.transaction(async (transaction) => {
            try {

                const users = await readFileCSV('csv-dataset/users.csv')
                console.log(users)


                await usersModel.bulkCreate(users, { transaction })



            } catch (error) {
                console.log(error)
            }
        })
    },
    down: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.sequelize.transaction(async () => {
            try {
                await queryInterface.bulkDelete(usersModel.tableName, {}, {})
            } catch (error) {
                console.log(error)
            }
        })
    },
}