const Repositories = {
    SequelizeUserRepository: Symbol.for('SequelizeUserRepository'),
    SequelizeBooksRepository: Symbol.for('SequelizeBooksRepository'),
    SequelizeBookRatingsRepository: Symbol.for('SequelizeBookRatingsRepository'),
}

const UserUseCases = {
    CreateUserUseCase: Symbol.for('CreateUserUseCase'),
    DeleteUserUseCase: Symbol.for('DeleteUserUseCase'),
    FindUserByIdUseCase: Symbol.for('FindUserByIdUseCase'),
    UpdateUserByIdUseCase: Symbol.for('UpdateUserByIdUseCase'),
}

const UserControllers = {
    CreateUserController: Symbol.for('CreateUserController'),
    DeleteUserController: Symbol.for('DeleteUserController'),
    UserFinderController: Symbol.for('UserFinderController'),
    UpdateUserController: Symbol.for('UpdateUserController')
}

const BooksUseCases = {
    CreateBookUseCase: Symbol.for('CreateBookUseCase'),
    RemoveBookByISBNUseCase: Symbol.for('RemoveBookByISBNUseCase'),
    FindBookByISBNUseCase: Symbol.for('FindBookByISBNUseCase'),
    FindAllBooksUseCase: Symbol.for('FindAllBooksUseCase'),
}

const BooksControllers = {
    CreateBookController: Symbol.for('CreateBookController'),
    RemoveBookByISBNController: Symbol.for('RemoveBookByISBNController'),
    FindBookByISBNController: Symbol.for('FindBookByISBNController'),
    BookFinderController: Symbol.for('BookFinderController'),
}

const BookRatingsUseCases = {
    CreateRatingUseCase: Symbol.for('CreateRatingUseCase'),
    FindAllRatingsByISBNUseCase: Symbol.for('FindAllRatingsByISBNUseCase'),
    FindAllRatingsByUserIdUseCase: Symbol.for('FindAllRatingsByUserIdUseCase'),
}

const BookRatingsControllers = {
    CreateRatingController: Symbol.for('CreateRatingController'),
    FindAllRatingsByISBNController: Symbol.for('FindAllRatingsByISBNController'),
    FindAllRatingsByUserIdController: Symbol.for('FindAllRatingsByUserIdController'),
}

const ContainerSymbols = {

    ...Repositories,

    ...UserUseCases,
    ...UserControllers,

    ...BooksUseCases,
    ...BooksControllers,

    ...BookRatingsUseCases,
    ...BookRatingsControllers,

}

export { ContainerSymbols }