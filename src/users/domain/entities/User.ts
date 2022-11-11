import { AgeVO } from '../value-objects/Age.vo'


export class User {

    private constructor(

        public location: string,
        public age: AgeVO,
    ) { }

    static create(
        location: string,
        age: AgeVO,
    ) {
        return new User(location, age)
    }
}