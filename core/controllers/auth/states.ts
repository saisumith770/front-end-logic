import { State } from '@pulsejs/core'
import App from '../../app'

//booleans for giving permissions to use the app
const loggedIn: State<boolean> = App.State<boolean>(false)
const emailVerification: State<boolean> = App.State<boolean>(false)

//csrf token that is required as a query param in all app routes
const csrf_token: State<string> = App.State<string>("")

//totp related data
const otp_url: State<string> = App.State<string>("")
const otp_secret: State<string> = App.State<string>("")

export default {
    loggedIn,
    emailVerification,
    csrf_token,
    otp_url,
    otp_secret
}