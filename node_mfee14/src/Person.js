

// class Person {
//   // 建構函式
//   constructor(name: string='noname', age: number=20) {
//     // instance 實體、實例
//     // 屬性
//     this.name = name;
//     this.age = age;
//   }

  // toString() {
  //   const {name, age} = this;
  //   console.log({name,age});
  //   return JSON.stringify(value: {name, age})
  // }
// }

class Person {
  constructor(name = 'noname', age = 20) {
    this.name = name;
    this.age = age;
  }

  // toString() {
  //   const {name, age} = this;
  //   return JSON.stringify({name, age});
  // }

  // toJSON() {
  //   return {
  //     name: this.name,
  //     age: this.age,
  //     from: 'toJSON'
  //   };
  // }
}
module.exports = Person;

// const p1 = new Person; //可以不加括號
// const p2 = new Person('Flora', 27);
// console.log(p1);
// console.log('' + p1);

// console.log(p2);
// console.log('' + p2); //toString()
// console.log(JSON.stringify(p2)); //toJSON

// function say() {
//   console.log('hi');
// }
// module.exports = say;