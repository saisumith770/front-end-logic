export class LoginError extends Error {
    constructor(...params: Array<any>) {
        super(...params)
        this.name = "login error"
        this.message = "invalid credentials were passed"
    }
}