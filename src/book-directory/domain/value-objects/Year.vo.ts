import { isNullable } from '../../../shared/domain/isNullable'
import { InvalidFormatVO } from '../../../shared/domain/value-objects/InvalidFormatVO'
import { ValueObject } from '../../../shared/domain/value-objects/ValueObject'
import { YEAR_REGEX } from '../regex_constants'

export class YearVO extends ValueObject<number>{

    constructor(year: number) {
        super(year)
        this.assertIsValid(year)
    }

    protected assertIsValid(year: number) {
        if (isNullable(year)) {
            throw new InvalidFormatVO('Value must be defined')
        }

    }

    static build(year: number) {

        if (!YEAR_REGEX.test(year.toString())) {
            throw new InvalidFormatVO('Invalid year Value Object format')
        }

        return new YearVO(year)
    }
}