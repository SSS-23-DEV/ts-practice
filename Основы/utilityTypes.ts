// Pick, Omit, Partial

interface ICar {
    id?: number,
    name?: string,
    price: number,
    year: number,
}

interface ICarCreate extends Omit<ICar, 'id'> {}
interface ICarId extends Pick<ICar, 'id'> {}
interface IOptinitalCar extends Partial<ICar> {}
interface IReadonlyCar extends Readonly<ICar> {}
interface IRequiredCar extends Required<ICar> {}

const car: ICarCreate = {
    name: 'BMW',
    price: 30000,
    year: 2000,
}

const car2: ICarId = {
    id: 1
}

const car3: IOptinitalCar = { // делает поля необязтельными
}

const car4: IReadonlyCar = {
    id: 2,
    name: 'BMW',
    price: 10000,
    year: 2000,
    // поля только для чтения
}

type TypeCarRecord = Record<'name' | 'price', string | number>

const car5: TypeCarRecord = {
    name: 'NNN',
    price: "111",
}

const car6: IRequiredCar = {
    id: 3,
    name: 'WEQW',
    price: 11111,
    year: 2000,
    // required делает поля обязательными
} 

type TypeGetName = () => string
type Return = ReturnType<TypeGetName>

const car7: Return = 'hello';

type Any = Extract<'max' | 'andrey', 'andrey' | 'misha'> // 'andrey' возвращает дубликат
type Any2 = Exclude<'max' | 'andrey', 'andrey' | 'misha'> // 'max' исключает по первому параметру
type NotNull = NonNullable<string | number | null | undefined> // удаляет null/undefined