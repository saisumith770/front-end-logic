export class RegistrationError extends Error {
    constructor(...params: Array<any>) {
        super(...params)
        this.name = "registration error"
        this.message = "the credentials seemed to follow the wrong format"
    }
}