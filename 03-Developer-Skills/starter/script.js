// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// const temp=[3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const calcTempAmplitude = function (temp) {
//     let max = temp[0];
//     let min = temp[0];
//     for (let i = 0; i < temp.length; i++){
//         const curTemp = temp[i];
//         if (typeof curTemp !== 'number')
//             continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     return max - min;
// }
// console.log(calcTempAmplitude(temp));

//CODING CHALLENGE 1

const temp = [17, 21, 23];
const printForecast = function (t1, t2) {
    const arr = t1.concat(t2);
    let str = '';
    for (let i = 0; i < arr.length; i++){
        str+=`${arr[i]}ºC in ${i+1} days...`
    }
    console.log('...' + str);
}
printForecast([11, 2, 5, 7], [4, 3, 6, 5, 7]);
