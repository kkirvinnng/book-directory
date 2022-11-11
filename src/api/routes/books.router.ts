import { Router } from 'express'
import container from '../../dependency-injection/container'
import { ContainerSymbols } from '../../dependency-injection/symbols'
import { BookFinderController } from '../controllers/book-directory/books/BookFinder.ctrl'
import { CreateBookController } from '../controllers/book-directory/books/CreateBook.ctrl'
import { FindBookByISBNController } from '../controllers/book-directory/books/FindBookByISBN.ctrl'
import { RemoveBookByISBNController } from '../controllers/book-directory/books/RemoveBookByISBN.ctrl'

const router = Router()


const createBookController = container.get<CreateBookController>(
    ContainerSymbols.CreateBookController
)

const removeBookByISBNController = container.get<RemoveBookByISBNController>(
    ContainerSymbols.RemoveBookByISBNController
)

const findBookByISBNController = container.get<FindBookByISBNController>(
    ContainerSymbols.FindBookByISBNController
)

const bookFinderController = container.get<BookFinderController>(
    ContainerSymbols.BookFinderController
)

router.get('/', bookFinderController.run.bind(bookFinderController))

router.get('/isbn', findBookByISBNController.run.bind(findBookByISBNController))

router.post('/create', createBookController.run.bind(createBookController))

router.delete('/delete', removeBookByISBNController.run.bind(removeBookByISBNController))



export { router as books }

