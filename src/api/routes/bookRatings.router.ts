import { Router } from 'express'
import container from '../../dependency-injection/container'
import { ContainerSymbols } from '../../dependency-injection/symbols'
import { CreateRatingController } from '../controllers/book-directory/book-rating/CreateRating.usecase'
import { FindAllRatingsByISBNController } from '../controllers/book-directory/book-rating/FindAllRatingsByISBN.usecase'
import { FindAllRatingsByUserIdController } from '../controllers/book-directory/book-rating/FindAllRatingsByUserId'

const router = Router()


const createRatingController = container.get<CreateRatingController>(
    ContainerSymbols.CreateRatingController
)


const findAllRatingsByISBNController = container.get<FindAllRatingsByISBNController>(
    ContainerSymbols.FindAllRatingsByISBNController
)

const findAllRatingsByUserIdController = container.get<FindAllRatingsByUserIdController>(
    ContainerSymbols.FindAllRatingsByUserIdController
)


router.post('/create', createRatingController.run.bind(createRatingController))

router.get('/isbn', findAllRatingsByISBNController.run.bind(findAllRatingsByISBNController))

router.get('/userId', findAllRatingsByUserIdController.run.bind(findAllRatingsByUserIdController))



export { router as bookRatings }

