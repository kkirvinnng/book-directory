import { Book } from '../../../../book-directory/domain/entities/Book'

export interface BookDTO {
    isbn: string,
    bookTitle: string,
    bookAuthor: string,
    yearOfPublication: number,
    publisher: string,
    imageURL_S: string,
    imageURL_M: string,
    imageURL_L: string
}

export const mapperBookDTO = (book: Book) => {

    const dto: BookDTO = {
        isbn: book.isbn.value,
        bookTitle: book.bookTitle,
        bookAuthor: book.bookAuthor,
        yearOfPublication: book.yearOfPublication.value,
        publisher: book.publisher,
        imageURL_S: book.imageURL_S.value,
        imageURL_M: book.imageURL_M.value,
        imageURL_L: book.imageURL_L.value
    }

    return dto
}
