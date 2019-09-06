// es6
// Exercise 1
// @ts-ignore
const double = value => value * 2; // arrow-function

// Exercise 2
// @ts-ignore
// tslint:disable-next-line:ter-arrow-parens
const greet = name => {             // arrow-function
  if (name === undefined) {
    // tslint:disable-next-line:no-parameter-reassignment
    name = 'Alex';
  }
  console.log(`Hello, ${name}`);
};

// Exercise 3
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));  // spread

// Exercise 4
let newArray = [55, 20];
newArray = [55, 20, ...numbers];     // spread

// Exercise 5
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults; // destructuring

// Exercise 6
const scientist = { firstName: 'Will', experience: 12 }; // destructuring
const { firstName, experience }  = scientist;
// types
type AccountObj = { money: number; deposit(value: number): void };
// Now I use 'type' here, but 'we should always use an interface over a type alias if possible'.
// interface AccountObj {
//     money: number;
//     deposit: (value: number) => void
// }
let bankAccount: AccountObj = {
  money: 2000,
  deposit(value) {
    this.money += value;
  },
};

let myself: {name: string; bankAccount: AccountObj; hobbies: string[]} = {
  name: 'Alex',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking'],
};

myself.bankAccount.deposit(3000);
// class
// Exercise 1
class Car {
  public acceleration: number = 0;
  constructor (readonly name: string) {
  }

  honk(): void {
    console.log('Toooooooooot!');
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}

let car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
interface BaseObject {
  width: number;
  height: number;
}

interface CalcObject extends BaseObject {
  calcSize: (this: CalcObject) => number;
}

let rectangle: CalcObject = {
  width: 5,
  height: 2,
  calcSize() { return this.width * this.height; },
};

// Exercise 3
class Person {
  private _firstName: string = '';

  get firstName(): string {
    return this._firstName;
  }

  set firstName(firstName: string) {
    if (firstName.length > 3) {
      this._firstName = firstName;
    } else {
      this._firstName = '';
    }
  }
}

let person = new Person();
console.log(person.firstName);
person.firstName = 'John';
console.log(person.firstName);
person.firstName = 'Doe';
console.log(person.firstName);
