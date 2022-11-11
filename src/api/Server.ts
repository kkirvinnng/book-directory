import * as http from 'http'
import express, { Request, Response, NextFunction } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import cookie from 'cookie-parser'
import logger from '../shared/infraestructure/logger/Winston'

export default class Server {
    private express: express.Express
    private httpServer?: http.Server
    constructor() {
        this.express = express()
        this.express.use(express.json())
        this.express.use(helmet())
        this.express.use(cookie())
        this.express.use(cors())
        this.express.use((req: Request, res: Response, next: NextFunction) => {
            logger.info(`${req.method} ${req.url} 🚧🚦`)
            next()
        })
    }

    getExpress() {
        return this.express
    }

    listen(port: string) {
        this.httpServer = this.express.listen(port, () => {
            console.log(`Node process: ${process.pid}`)
            console.log(`Port ${port}`)
            console.log(`http://localhost:${port}/api/`)
        })
    }

    getHTTPServer() {
        return this.httpServer
    }

}