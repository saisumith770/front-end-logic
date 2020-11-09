export interface creatorInfo {
    username: string
    domain: string
    photo: string
}

export interface userPayload extends creatorInfo {
    type: string
}