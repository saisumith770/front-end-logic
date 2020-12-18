export interface App {
    platform: string
    accountName: string
    accountURL: string
    showOnProfile: showOnProfile
}

enum showOnProfile {
    true = "true",
    false = "false"
}