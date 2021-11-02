function Person(name, surname, age, height, weight) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.height = height;
  this.weight = weight;
}

const person1 = new Person("achiko", "mebonia", 30, 180, 85);
const person2 = new Person("gocha", "talakvadze", 25, 178, 77);
console.log(person1);
console.log(person2)

