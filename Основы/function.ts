type TypeChannelReturn = {
    name: string
}

function getChannel(name: string):TypeChannelReturn {
    return { name }
}
getChannel('Saga');

type TypeChannelFunction = (name: string) => TypeChannelReturn;

const getChannelName: TypeChannelFunction = name => {
    return { name }
}

const getNumbers = (...numbers: number[]) => {
    return numbers;
}

// Перегрузка функции
function getCar(name: string): string
function getCar(name: string, price: number): string;

function getCar(name: string, price?: number): string{
    return price ? `Название ${name} цена ${price}` : `Название ${name}`;
};

const car1 = getCar('BMW');
const car2 = getCar('BMW', 10000);
// const car3 = getCar('BMW', 10000, null) // error