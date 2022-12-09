
interface User {
    email: string
    password: string
}

interface Token {
    token: string
}

interface LocalStorage{
    key: string | null
    defaultValue: string | undefined
}

export { User, Token, LocalStorage }