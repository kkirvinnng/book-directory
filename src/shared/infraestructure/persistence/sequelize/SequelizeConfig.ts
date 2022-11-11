import dotenv from 'dotenv'
import { Options } from 'sequelize/types'

dotenv.config()

interface SequelizeConfig {
    development: Options
    test: Options
    production: Options
}

const dialect = 'mysql'

const configDB: SequelizeConfig = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect,
        dialectOptions: {
            charset: 'utf8',
        },
        define: {
            timestamps: false,
        },
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect,
        dialectOptions: {
            charset: 'utf8',
        },
        define: {
            timestamps: false,
        },
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect,
        dialectOptions: {
            charset: 'utf8',
            multipleStatements: true,
        },
        logging: false,
        define: {
            timestamps: false,
        },
    },
}
export = configDB

