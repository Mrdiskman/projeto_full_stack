export interface IContact{
    id: string,
    user:object,
    name:string,
    email:string,
    number:string,
    register?:Date
}

export interface IContactCreate{
    name:string,
    email:string,
    number:string,
}

export interface IContactUpdate{
    name?: string,
    email?: string,
    password?: string,
    number?:string, 
}