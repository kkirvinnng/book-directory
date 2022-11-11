import { Container } from 'inversify'
import { CreateRatingController } from '../api/controllers/book-directory/book-rating/CreateRating.usecase'
import { FindAllRatingsByISBNController } from '../api/controllers/book-directory/book-rating/FindAllRatingsByISBN.usecase'
import { FindAllRatingsByUserIdController } from '../api/controllers/book-directory/book-rating/FindAllRatingsByUserId'
import { BookFinderController } from '../api/controllers/book-directory/books/BookFinder.ctrl'
import { CreateBookController } from '../api/controllers/book-directory/books/CreateBook.ctrl'
import { FindBookByISBNController } from '../api/controllers/book-directory/books/FindBookByISBN.ctrl'
import { RemoveBookByISBNController } from '../api/controllers/book-directory/books/RemoveBookByISBN.ctrl'
import { CreateUserController } from '../api/controllers/users/CreateUser.ctrl'
import { DeleteUserController } from '../api/controllers/users/DeleteUser.ctrl'
import { UpdateUserController } from '../api/controllers/users/UpdateUser.ctrl'
import { UserFinderController } from '../api/controllers/users/UserFinder.ctrl'
import { CreateRatingUseCase } from '../book-directory/application/use-cases/book-rating/CreateRating.usecase'
import { FindAllRatingsByISBNUseCase } from '../book-directory/application/use-cases/book-rating/FindAllRatingsByISBN.usecase'
import { FindAllRatingsByUserIdUseCase } from '../book-directory/application/use-cases/book-rating/FindAllRatingsByUserId.usecase'
import { FindAllBooksUseCase } from '../book-directory/application/use-cases/books/FindAllBooks.usecase'
import { CreateBookUseCase } from '../book-directory/application/use-cases/books/CreateBook.usecase'
import { FindBookByISBNUseCase } from '../book-directory/application/use-cases/books/FindBookByISBN.usecase'
import { RemoveBookByISBNUseCase } from '../book-directory/application/use-cases/books/RemoveBookByISBN.usecase'
import { BookRatingsRepository } from '../book-directory/domain/repositories/BookRatingsRepository'
import { BooksRepository } from '../book-directory/domain/repositories/BooksRepository'
import { SequelizeBookRatingsRepository } from '../book-directory/infraestructure/persistence/sequelize/SequelizeBookRatingsRepository'
import { SequelizeBooksRepository } from '../book-directory/infraestructure/persistence/sequelize/SequelizeBooksRepository'
import { CreateUserUseCase } from '../users/application/use-cases/CreateUser.usecase'
import { DeleteUserUseCase } from '../users/application/use-cases/DeleteUser.usecase'
import { FindUserByIdUseCase } from '../users/application/use-cases/FindUserById.usecase'
import { UpdateUserByIdUseCase } from '../users/application/use-cases/UpdateUserById.usecase'
import { UserRepository } from '../users/domain/repositories/UserRepository'
import { SequelizeUserRepository } from '../users/infraestructure/persistence/sequelize/SequelizeUserRepository'
import { ContainerSymbols } from './symbols'



const container = new Container()

/**
 * All Repositories
 */
const Repositories = () => {

    //* User Repositories
    container
        .bind<UserRepository>(ContainerSymbols.SequelizeUserRepository)
        .to(SequelizeUserRepository)

    container
        .bind<BooksRepository>(ContainerSymbols.SequelizeBooksRepository)
        .to(SequelizeBooksRepository)

    container
        .bind<BookRatingsRepository>(ContainerSymbols.SequelizeBookRatingsRepository)
        .to(SequelizeBookRatingsRepository)
}

/**
 * User Use Cases
 */
const UserUseCases = () => {

    container
        .bind<CreateUserUseCase>(ContainerSymbols.CreateUserUseCase)
        .to(CreateUserUseCase)
    container
        .bind<UpdateUserByIdUseCase>(ContainerSymbols.UpdateUserByIdUseCase)
        .to(UpdateUserByIdUseCase)

    container
        .bind<FindUserByIdUseCase>(ContainerSymbols.FindUserByIdUseCase)
        .to(FindUserByIdUseCase)

    container
        .bind<DeleteUserUseCase>(ContainerSymbols.DeleteUserUseCase)
        .to(DeleteUserUseCase)

}

/*
 * User Controllers
 */
const UserControllers = () => {

    container
        .bind<CreateUserController>(ContainerSymbols.CreateUserController)
        .to(CreateUserController)

    container
        .bind<DeleteUserController>(ContainerSymbols.DeleteUserController)
        .to(DeleteUserController)

    container
        .bind<UpdateUserController>(ContainerSymbols.UpdateUserController)
        .to(UpdateUserController)

    container
        .bind<UserFinderController>(ContainerSymbols.UserFinderController)
        .to(UserFinderController)
}

/**
 * Books Use Cases
 */
const BooksUseCases = () => {

    container
        .bind<CreateBookUseCase>(ContainerSymbols.CreateBookUseCase)
        .to(CreateBookUseCase)

    container
        .bind<FindBookByISBNUseCase>(ContainerSymbols.FindBookByISBNUseCase)
        .to(FindBookByISBNUseCase)
    container
        .bind<RemoveBookByISBNUseCase>(ContainerSymbols.RemoveBookByISBNUseCase)
        .to(RemoveBookByISBNUseCase)

    container
        .bind<FindAllBooksUseCase>(ContainerSymbols.FindAllBooksUseCase)
        .to(FindAllBooksUseCase)
}

/**
 * Books Controllers
 */
const BooksControllers = () => {

    container
        .bind<CreateBookController>(ContainerSymbols.CreateBookController)
        .to(CreateBookController)

    container
        .bind<FindBookByISBNController>(ContainerSymbols.FindBookByISBNController)
        .to(FindBookByISBNController)

    container
        .bind<RemoveBookByISBNController>(ContainerSymbols.RemoveBookByISBNController)
        .to(RemoveBookByISBNController)

    container
        .bind<BookFinderController>(ContainerSymbols.BookFinderController)
        .to(BookFinderController)
}

/**
 * Book Ratings Use Cases
 */
const BookRatingsUseCases = () => {

    container
        .bind<CreateRatingUseCase>(ContainerSymbols.CreateRatingUseCase)
        .to(CreateRatingUseCase)

    container
        .bind<FindAllRatingsByISBNUseCase>(ContainerSymbols.FindAllRatingsByISBNUseCase)
        .to(FindAllRatingsByISBNUseCase)

    container
        .bind<FindAllRatingsByUserIdUseCase>(ContainerSymbols.FindAllRatingsByUserIdUseCase)
        .to(FindAllRatingsByUserIdUseCase)
}

/**
 * Books Controllers
 */
const BookRatingsControllers = () => {

    container
        .bind<CreateRatingController>(ContainerSymbols.CreateRatingController)
        .to(CreateRatingController)

    container
        .bind<FindAllRatingsByISBNController>(ContainerSymbols.FindAllRatingsByISBNController)
        .to(FindAllRatingsByISBNController)

    container
        .bind<FindAllRatingsByUserIdController>(ContainerSymbols.FindAllRatingsByUserIdController)
        .to(FindAllRatingsByUserIdController)
}


Repositories()

UserUseCases()

UserControllers()

BooksUseCases()

BooksControllers()

BookRatingsUseCases()

BookRatingsControllers()

export default container