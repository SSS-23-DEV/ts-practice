function entity<T>(args: T):T{
    return args;
}

entity<number>(1);
entity<string>("text");

const entity2 = <T>(args: T):T => {
    return args;
}

entity2<number>(1);
entity2<string>("text");

class Channel<T> {
    private name: T

    constructor(name: T){
        this.name = name
    }

    getName():T{
        return this.name
    }
}

new Channel<string>('Saga');
new Channel<number>(123);

interface IPair<K, V>{
    key: K,
    value: V,
}

const pair1: IPair<string, number> = {
    key: '1',
    value: 1,
}

const pair2: IPair<string, string> = {
    key: '1',
    value: "val",
}

type TypeLength = {
    length: number
}

function getNameLength<T extends TypeLength>(entity: T): number{
    return entity.length
}

getNameLength('wewrwew')
getNameLength([1,2,3])