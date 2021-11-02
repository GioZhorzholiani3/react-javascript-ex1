function Person(name, surname, age, height, weight, calcBMI) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.height = height;
  this.weight = weight;
  let BMI =Math.round (weight / (height * height));
  calcBMI(BMI);
}

function calcBMI(bmi) {

    if(bmi < 18.5){
        console.log("Your BMI is "+bmi+",so you are underweight");
      } else {
          if ( bmi >= 18.5 && bmi <= 24.9) {
             console.log("Your BMI is "+bmi+",so you have a normal weight");
          } else {
            if ( bmi > 24.9) {
              console.log("Your BMI is "+bmi+",so you are overweight");
            }
          }
      }
}

const person1 = new Person("achiko", "mebonia", 30, 1.80, 85, calcBMI);
const person2 = new Person("gocha", "talakvadze", 25, 1.78, 77, calcBMI);

