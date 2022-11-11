import { isNullable } from '../../../shared/domain/isNullable'
import { InvalidFormatVO } from '../../../shared/domain/value-objects/InvalidFormatVO'
import { ValueObject } from '../../../shared/domain/value-objects/ValueObject'
import { ISBN_REGEX } from '../regex_constants'



export class IsbnVO extends ValueObject<string>{

    constructor(isbn: string) {
        super(isbn)
        this.assertIsValid(isbn)
    }

    protected assertIsValid(isbn: string) {
        if (isNullable(isbn)) {
            throw new InvalidFormatVO('Value must be defined')
        }

    }

    static build(isbn: string) {

        if (!ISBN_REGEX.test(isbn)) {
            throw new InvalidFormatVO('Invalid isbn Value Object format')
        }

        return new IsbnVO(isbn)
    }
}