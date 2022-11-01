// const benny = {
//   name: "Benny",
//   age: 7,
//   speak: function () {
//     console.log(`${this.name} says bark bark!`);
//   },
// };

// benny.speak();

// function Animal(name, age) {
//   this.name = name;
//   this.age = age;

//   this.speak = function () {
//     console.log(`${this.name} says bark bark!`);
//   };
// }

// Animal.prototype.describeAnimal = function () {
//   console.log(`name: ${this.name}, age: ${this.age}`);
// };
// const benny = new Animal("Benny", 7);
// benny.speak();
// benny.describeAnimal();
// console.log(benny.__proto__);

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} says bark bark!`);
  }
}

const benny = new Animal('Benny', 7);
benny.speak();
