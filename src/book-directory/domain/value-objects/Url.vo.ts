import { isNullable } from '../../../shared/domain/isNullable'
import { InvalidFormatVO } from '../../../shared/domain/value-objects/InvalidFormatVO'
import { ValueObject } from '../../../shared/domain/value-objects/ValueObject'
import { URL_REGEX } from '../regex_constants'



export class UrlVO extends ValueObject<string>{

    constructor(url: string) {
        super(url)
        this.assertIsValid(url)
    }

    protected assertIsValid(url: string) {
        if (isNullable(url)) {
            throw new InvalidFormatVO('Value must be defined')
        }

    }

    static build(url: string) {

        if (!URL_REGEX.test(url)) {
            throw new InvalidFormatVO('Invalid url Value Object format')
        }

        return new UrlVO(url)
    }
}