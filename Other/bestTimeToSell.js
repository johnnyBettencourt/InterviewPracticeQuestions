const input1 = [7, 1, 5, 3, 6, 4] //expected to output 5
const input2 = [7, 6, 4, 3, 1] //expected to be 0
const input3 = [1, 2, 3, 4, 5] //expected to be 4

// const bestTimeToSell = (arr) => {
//     let maxProf = 0;

//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(j > i){
//                 let currentDiff = arr[j] - arr[i];
//                 if (currentDiff > maxProf){
//                     maxProf = currentDiff;
//                 }
//             }
//         }
//     }
//     return maxProf
// }

const bestTimeToSell = (arr) => {
    let maxProf = 0;
    let minPrice = Infinity;
    for (let price of arr){
        if(price < minPrice){
            minPrice = price;
        }
        let profit = price - minPrice;
        if(profit > maxProf){
            maxProf = profit;
        }
    }
    return maxProf;
}

console.log(bestTimeToSell(input1));
console.log(bestTimeToSell(input2));
console.log(bestTimeToSell(input3));