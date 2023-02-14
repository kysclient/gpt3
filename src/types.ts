
export type ChatType = {
    text: string
    from: string
}

export type OpenAIType = {
    id: string
    model: string
    object: string
    usage: {}
    created: number
    choices: []
}