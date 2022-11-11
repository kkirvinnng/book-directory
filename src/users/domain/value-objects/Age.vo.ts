import { isNullable } from '../../../shared/domain/isNullable'
import { AGE_REGEX } from '../../../shared/domain/regex_constants'
import { InvalidFormatVO } from '../../../shared/domain/value-objects/InvalidFormatVO'
import { ValueObject } from '../../../shared/domain/value-objects/ValueObject'



export class AgeVO extends ValueObject<number>{

    constructor(age: number) {
        super(age)
        this.assertIsValid(age)
    }

    protected assertIsValid(age: number) {
        if (isNullable(age)) {
            throw new InvalidFormatVO('Value must be defined')
        }

        if (!AGE_REGEX.test(age.toString())) {
            throw new InvalidFormatVO('Invalid Age Value Object format')
        }
    }

    static build(age: number) {

        if (!AGE_REGEX.test(age.toString())) {
            throw new InvalidFormatVO('Invalid Age Value Object format')
        }

        return new AgeVO(age)
    }
}