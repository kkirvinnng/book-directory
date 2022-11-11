import 'reflect-metadata'
import dotenv from 'dotenv'
dotenv.config()

import Server from './Server'
import routes from './routes'
import invalidRoute from './http-response/invalidRoute'
import { errorHandler } from './http-response/errorHandler'

const server = new Server()
const app = server.getExpress()

app.use('/api/user', routes.users)
app.use('/api/book', routes.books)
app.use('/api/book-rating', routes.bookRatings)

app.use(invalidRoute)

app.use(errorHandler)

server.listen('5000' || process.env.API_PORT)


export default app