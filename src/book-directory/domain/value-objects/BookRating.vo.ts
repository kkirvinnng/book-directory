import { isNullable } from '../../../shared/domain/isNullable'
import { InvalidFormatVO } from '../../../shared/domain/value-objects/InvalidFormatVO'
import { ValueObject } from '../../../shared/domain/value-objects/ValueObject'
import { BOOK_RATING_REGEX } from '../regex_constants'


export class BookRatingVO extends ValueObject<number>{

    constructor(bookRating: number) {
        super(bookRating)
        this.assertIsValid(bookRating)
    }

    protected assertIsValid(bookRating: number) {
        if (isNullable(bookRating)) {
            throw new InvalidFormatVO('Value must be defined')
        }

    }

    static build(bookRating: number) {

        if (!BOOK_RATING_REGEX.test(bookRating.toString())) {
            throw new InvalidFormatVO('Invalid book rating Value Object format')
        }

        return new BookRatingVO(bookRating)
    }
}