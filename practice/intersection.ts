// interface Named {
//   readonly name?: string;
//   outputName?: string;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name?: string;

//   constructor(name?: string) {
//     if (name) {
//       this.name = name;
//     }
//   }

//   greet(phrase: string) {
//     if (this.name) {
//       console.log(phrase + " " + this.name);
//     } else {
//       console.log("Hi");
//     }
//   }
// }

// let user1: Person;
// user1 = new Person();

// user1.greet("Hello there, my name is ");
