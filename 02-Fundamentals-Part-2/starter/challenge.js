"use strict";

console.log("----------Challenge JavaScript-------------");

/*
Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 andData 2

5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

// SOLUTION

/*

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const averageScoreOfDolphins = calcAverage(44, 23, 71);
const averageScoreOfKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins > avgKoalas * 2) {
    return `Dolphins win ${avgDolhins} vs ${avgKoalas}`;
  } else if (avgKoalas > avgDolhins * 2) {
    return `Koalas win ${avgKoalas} vs ${avgDolhins}`;
  } else {
    return "No team wins...";
  }
};

console.log(checkWinner(averageScoreOfDolphins, averageScoreOfKoalas));

*/

/*
Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data below

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new
array) 😉

GOOD LUCK 😀



// SOLUTION

const calTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

const bills = [125, 555, 44];

const tip = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];

const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];

console.log(bills);
console.log(tip);
console.log(total);

*/

/*

Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀

*/

// SOLUTION

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(mark.calcBMI());

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(john.calcBMI());

const higherBMI =
  mark.calcBMI() > john.calcBMI()
    ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullName
      } (${john.calcBMI()})`
    : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
        mark.fullName
      } (${mark.calcBMI()})`;
console.log(higherBMI);
