enum EnumRoles {
    ADMIN = 0,
    GUEST = 1,
    USER = 2,
}

console.log(EnumRoles[EnumRoles.ADMIN]); // reverse mapping


interface IUser{
    role: EnumRoles
}

// const user: IUser = {
//     role: EnumRoles.ADMIN
// }

const enum EnumColors {
    black,
    pink,
    green,
}

interface IUser {
    role: EnumRoles,
    color: EnumColors,
}

const user: IUser = {
    role: EnumRoles.ADMIN,
    color: EnumColors.black,
}