class Car {
    name: string
    price: number

    constructor(name: string, price: number){
        this.name = name
        this.price = price
    }

    protected getInfo(): string{
        return `Name: ${this.name}, price ${this.price}`
    }

    anything(){
        this.getInfo();
    }
}

class Bus extends Car{
    constructor(name: string, price: number){
        super(name, price)
    }

    test(){
        this.getInfo();
    }
}

new Car('BMW', 10000).getInfo();
