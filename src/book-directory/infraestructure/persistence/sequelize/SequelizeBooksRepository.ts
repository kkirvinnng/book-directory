import { injectable } from 'inversify'
import { UrlVO } from '../../../domain/value-objects/Url.vo'
import { Book } from '../../../domain/entities/Book'
import { BooksRepository } from '../../../domain/repositories/BooksRepository'
import { booksModel } from './models/books.models'
import { SequelizeBooks } from './models/SequelizeBooks'
import { YearVO } from '../../../domain/value-objects/Year.vo'
import { IsbnVO } from '../../../domain/value-objects/Isbn.vo'
import { Op } from 'sequelize'
import { DomainToPersistenceBookKeys as BOOK_KEYS } from '../../../domain/constants'

@injectable()
export class SequelizeBooksRepository implements BooksRepository {

    private async toDomain(persistanceBooks: SequelizeBooks) {
        const {
            ISBN,
            Book_Title,
            Book_Author,
            Year_Of_Publication,
            Publisher,
            Image_URL_S,
            Image_URL_M,
            Image_URL_L
        } = persistanceBooks


        return Book.create({
            isbn: new IsbnVO(ISBN),
            bookTitle: Book_Title,
            bookAuthor: Book_Author,
            yearOfPublication: new YearVO(Year_Of_Publication),
            publisher: Publisher,
            imageURL_S: new UrlVO(Image_URL_S),
            imageURL_M: new UrlVO(Image_URL_M),
            imageURL_L: new UrlVO(Image_URL_L)
        })

    }

    private toPersistance(domainBook: Book) {
        const {
            isbn,
            bookTitle,
            bookAuthor,
            yearOfPublication,
            publisher,
            imageURL_S,
            imageURL_M,
            imageURL_L,
        } = domainBook

        return {
            ISBN: isbn.value,
            Book_Title: bookTitle,
            Book_Author: bookAuthor,
            Year_Of_Publication: yearOfPublication.value,
            Publisher: publisher,
            Image_URL_S: imageURL_S.value,
            Image_URL_M: imageURL_M.value,
            Image_URL_L: imageURL_L.value
        }
    }

    async save(book: Book): Promise<void> {
        const persistRating = this.toPersistance(book)

        await booksModel.create(persistRating)
    }

    async findByISBN(isbnVO: IsbnVO): Promise<Book | null> {
        const isbn = isbnVO.value
        const bookFound = await booksModel.findOne({ where: { ISBN: isbn } })

        if (!bookFound) return null

        const bookDomain = await this.toDomain(bookFound)

        return bookDomain
    }

    async removeByISBN(isbnVO: IsbnVO): Promise<void> {

        const isbn = isbnVO.value

        await booksModel.destroy({ where: { ISBN: isbn } })
    }

    async findAll(): Promise<Book[] | null> {
        const booksFound = await booksModel.findAll()

        if (!booksFound) return null

        const booksDomain = await Promise.all(

            booksFound.map(async book => {
                return await this.toDomain(book)
            })
        )

        return booksDomain
    }

    async findByFilters(book: Partial<Pick<Book,
        'bookAuthor'
        | 'bookTitle'
        | 'yearOfPublication'
        | 'publisher'
    >>): Promise<Book[] | null> {


        const persistenceBooks = []


        /**
         * Filter and format the values for the database
         */
        for (const [key, bookValue] of Object.entries(book)) {

            if (bookValue) {
                const obj: any = {}

                obj[BOOK_KEYS[key]] = bookValue

                if (typeof bookValue === 'object') {

                    obj[BOOK_KEYS[key]] = bookValue.value
                }

                persistenceBooks.push(obj)
            }
        }

        const booksFound = await booksModel.findAll({
            where: {
                [Op.and]: persistenceBooks
            }
        })


        if (!booksFound) return null

        const bookDomain = await Promise.all(

            booksFound.map(async book => {
                return await this.toDomain(book)
            })
        )

        return bookDomain
    }
}

