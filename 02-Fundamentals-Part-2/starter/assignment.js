'use strict'
// //FUNCTIONS
// function descibeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }
// console.log(descibeCountry('India', 1380, 'New Delhi'));
// console.log(descibeCountry('Japan', 120, 'Tokyo'));
// console.log(descibeCountry('USA', 330, 'Washington DC'));
// /* ******************************************************************* */

// //FUNCTION DECLARATION VS EXPRESSION
// const worldPopulation = 7900;

// function percentageOfWorld1(population) {
//     return (population * 100) / worldPopulation;
// }
// console.log(percentageOfWorld1(1380));
// console.log(percentageOfWorld1(1441));
// console.log(percentageOfWorld1(330));

// const percentageOfWorld2 = function (population) {
//     return (population / worldPopulation) * 100;
// }
// console.log(percentageOfWorld2(1380));
// console.log(percentageOfWorld2(1441));
// console.log(percentageOfWorld2(330));
// /* ******************************************************************* */

// //ARROW FUNCTION
// const percentageOfWorld3 = population => (population / worldPopulation) * 100;
// console.log(percentageOfWorld3(1380));
// console.log(percentageOfWorld3(1441));
// console.log(percentageOfWorld3(330));
// /* ******************************************************************* */

// //FUNCTION CALLING OTHER FUNCTION
// const describePopulation = function (country, population) {
//     const percentPopulation = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${percentPopulation}% of the world`;
// }
// console.log(describePopulation('India', 1380));
// /* ******************************************************************* */

// //ARRAY
// const population = [1380, 330, 1441, 120];
// console.log(population.length === 4 ? true : false);
// const percentage = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2]), percentageOfWorld1(population[3])];
// console.log(percentage);

// //ARRAY OPERATION
// const neighbours = ['Pakistan', 'Nepal', 'Bangladesh', 'Sri Lanka', 'Afganistan','China'];
// console.log(neighbours);
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if(!neighbours.includes('Germany'))
// console.log('Probably not a central Europian country');
// neighbours[neighbours.indexOf('China')]='Republic of China';
// console.log(neighbours);

// //INTRODUCTION TO OBJECTS
// const myCountry = {
// country:'India',
// capital:'New Delhi',
// language: 'Hindi',
// population:1380,
// neighbour:['Pakistan', 'Nepal', 'Bangladesh', 'Sri Lanka', 'Afganistan','China']
// }

// //DOT VS BRAKET NOTATION
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbour.length} neighbouring countries and a capitol called ${myCountry.capital}`);

// myCountry.population+=2;
// myCountry['population']-=2;
// console.log(myCountry.population);

// //OBJECT METHOD
// const myCountry = {
//     country: 'India',
//     capital: 'New Delhi',
//     language: 'Hindi',
//     population: 1380,
//     neighbour: ['Pakistan', 'Nepal', 'Bangladesh', 'Sri Lanka', 'Afganistan', 'China'],
//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbour.length} neighbouring countries and a capitol called ${this.capital}`);
//     },
//     checkIsland: function () {
//         console.log(this.neighbour.length === 0 ? true : false);
//     }
// };

// myCountry.describe();
// myCountry.checkIsland()

// // FOR LOOP
// for(let i=1;i<=50;i++){
//     console.log(`Voter number ${i} is currently voting`);
// }

// //LOOPING ARRAY
// const percentage2=[];
// const population = [1380, 330, 1441, 120];
// for(let i=0;i<population.length;i++){
//     percentage2.push((population[i]*100)/7900);
// }
// console.log(percentage2);

// //LOOPING BACKWARD
// const listOfNeighbours=[['Canada','Mexico'],['Spain'],['Norway','Sweden','Russia']];
// for(let i=0;i<listOfNeighbours.length;i++){
//     for(let j=0;j<listOfNeighbours[i].length;j++){
//         console.log(`Neighbour:${listOfNeighbours[i][j]}`);
//     }
// }

// //WHILE LOOP
// const percentage3=[];
// const population = [1380, 330, 1441, 120];
// let i=0;
// while(i<population.length){
//     percentage3.push((population[i]*100)/7900);
//     i++;
// }
// console.log(percentage3);
