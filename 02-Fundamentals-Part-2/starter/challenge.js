'use strict'
// //CODING CHALLENGE 1
// const totalDolphins = 85 + 54 + 41;
// const totalKoalas = 23 + 34 + 27;
// const calcAverage = (score) => score / 3;
// const avgDolphins = calcAverage(totalDolphins);
// const avgKoalas = calcAverage(totalKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas)
//         return `Dolphins wins (${avgDolphins} vs ${avgKoalas})`;
//     else if (avgKoalas >= 2 * avgDolphins)
//         return `Koalas wins (${avgKoalas} vs ${avgDolphins})`;
//     else
//         return `No one wins!`
// }

// console.log(checkWinner(avgDolphins, avgKoalas));

// //CODING CHALLENGE 2
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }
// console.log(calcTip(100));

// const bills = [122, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// //CODING CHALLENGE 3
// const marks = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function (){
//         this.bmi=this.mass/(this.height**2);
//         return this.bmi;
//     }
// };
// const john = {
//     fullname: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function (){
//         this.bmi=this.mass/(this.height**2);
//         return this.bmi;
//     }
// };
// marks.calcBMI();
// john.calcBMI();
// if(marks.bmi>john.bmi)
// console.log(`Mark's BMI is (${marks.bmi}) is higher than John's (${john.bmi})!`);
// else
// console.log(`John's BMI is (${john.bmi}) is higher than Mark's (${marks.bmi})!`);

//CODING CHALLENGE 4
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i]+tips[i]);
}
console.log(tips);
console.log(totals);

const calcAverage = function (arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return average = sum/arr.length;
}
console.log(calcAverage(totals));