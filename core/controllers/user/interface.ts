export interface user_data {
    photo?: true
    username?: true
    domain?: true
    created_at?: boolean
    confirmed?: boolean
    tags?: boolean
    description?: boolean
    viewers?: boolean
    subscription?: boolean
    vods?: boolean
    activity?: boolean
}

export enum user_state {
    offline = "offline",
    online = "online",
    streaming = "STREAMING",
    chatting = "CHATTING",
    playing = "PLAYING",
    listening = "LISTENING"
}