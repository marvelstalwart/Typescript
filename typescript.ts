//boolean
let isCool: boolean = true

//number
let age: number = 56

//String
let eyeColor: string = 'brown'

let favouriteQuote: String = `I'm not old, I'm only ${age}`

//Array
let pets: string[] = ['Dogs', 'Cats', 'Sheep']
let pet2: Array<string> = ['Lion', 'Dog', 'Liger']

//Object
let wizard: object = {
    a: 'John'
}

//null
let data: undefined = undefined
let promise: null = null

//Tuple (Accepts array of different types IN ORDER)
let basket: [string, number];
basket = ['basketball', 5]

//Enum
enum Size { Small = 1, Medium = 2}
let sizeName: string = Size[2]

//Any (Accepts any type but defeats the purpose of typescript)
let whatever: any = 'Any type stuff !'
whatever = basket


//Void (Function that does not return anything)
let sing = ():void => {
        console.log("do do do")
}

// Never (No return and does not have a reachable endpoint)
let error = (): never=> {
    throw Error('oops')
}

//Interface
interface Army {
    count: number,
    type: string,
    magic: string
}

let fightArmy = (soldiers: Army) => {
    console.log(soldiers)
}

//Type assertion
interface Doctors {
    count: number,
    type: string,
    magic: string
}

let newDoctors = {} as Doctors
newDoctors.count

//Function
let fightArmy2 = (soldiers: Army) : void => {
    console.log("Action")
}

let fightArmy4 = (soldiers: {count:number, type: string, magic: string}): number => {
    console.log("Action")
    return 5
}

// Class
class Animal {
    sing: string = 'lalala'
    constructor(sound: string) {
        this.sing = sound
    }   

    greet() {
        return `Hello ${this.sing}`
    }
}


let lion = new Animal ('roar')
lion.greet()

//Union
let confused: string | number = 45

//