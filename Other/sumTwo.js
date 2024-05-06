let input = [2, 7, 11, 15];
let inputTarget = 9;
//Output: [0, 1]

// const sumTwo = (arr, target) => {
//     for(let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++){
//             if(i !== j && arr[i] + arr[j] === target){
//                 return [i, j];
//             }
//         }
//     };
// }

const sumTwo = (arr, target) => {
    const numMap = {};
    for (let i = 0; i < arr.length; i++){
        const complement = target - arr[i];
        if (numMap[complement] !== undefined){
            return [numMap[complement], i];
        }
        numMap[arr[i]] = i;
    }
    return [];
}

console.log(sumTwo(input, inputTarget));

//Time: 31:53