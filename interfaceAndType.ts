interface IUserAge {
    age: number
}

interface IUser extends IUserAge{
    name: string,
    email: string
}

type TypePerson = {
    age: number
}

type TypeUser = {
    name: string
    email: string
} & TypePerson // расширяется, а интерфейс через экстендс

const user: IUser = {
    name: 'Saga',
    email: 'email',
    age: 23,
}

const users: IUser[] = [user, {name: 'name', email: 'email', age: 20}];