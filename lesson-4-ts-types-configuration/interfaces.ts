interface InterfacePerson {
  firstName: string;
  hobbies?: string[];
  greet: (lastName: string) => void;
}

function greet(person: InterfacePerson): void {
  console.log(`Hello, ${person.firstName}`);
}

function changeName(person: InterfacePerson): void {
  person.firstName = 'Anna';
}

const person: InterfacePerson = {
  firstName: 'John',
  hobbies: ['Cooking', 'Sports'],
  greet (lastName) {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  },
};

changeName(person);
greet(person);
person.greet('Anything');

class Person implements InterfacePerson {
  firstName: string;
  lastName: string;

  greet(lastName) {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  }
}

const myPerson = new Person();
myPerson.firstName = 'Doe';
myPerson.lastName = 'Anything';
greet(myPerson);
myPerson.greet(myPerson.lastName);