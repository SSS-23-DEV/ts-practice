type TypeIsNumber<T> = T extends number ? 'yes' : 'no';

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

type TypeBrand = 'bmw' | 'audi' | 'mersedes';
type TypePrice = '1000' | '2000' | '3000';

type TypeCar =  `${TypeBrand} ${TypePrice}`

const car1: TypeCar = 'audi 1000';
const car2: TypeCar = 'bmw 2000';