let firstName: string = 'Sagyndyk';
let entity: number = 1;
let isBoolean: boolean = true;
// undefined, null, any, unknown, void

// const user: object = {
//     userName: 'fredis',
//     isAdmin: false,
// };

type TypeUser = {
    name: string,
    age: number,
};

type TypeAddress = {
    city: string,
    country: string,
}

let user: TypeUser;
user = {
    name: 'Sagyndyk',
    age: 23,
};

const address: TypeAddress = {
    city: 'URL',
    country: 'KZ',
}

let common: TypeUser & TypeAddress;

common = {
    ...user,
    ...address,
}