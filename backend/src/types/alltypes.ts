export interface IUser {
    name: string, 
    username: string,
    email: string, 
    password?: string
}

export interface IContent {
    link: string, 
    photourl: string,
    note: string,
    title: string, 
    tags: any,
    userId: any,
    createdAt: Date,
}
