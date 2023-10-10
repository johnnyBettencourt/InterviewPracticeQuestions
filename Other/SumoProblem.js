const testArr = [1, 3, 5, 8, 2, 3, 7]

function sumoWinner(arr) {
    const newArr = arr
    while (newArr.length > 1) {
        let bestSumo = {
                power: 0,
                index: 0,
            };
            let secondBestSumo = {
                power: 0,
                index: 0,
            };
        for (let i = 0; i <= newArr.length; i++){
            
            if (newArr[i] > bestSumo.power) {
                bestSumo.power = newArr[i];
                bestSumo.index = i;
            }
            else{
                if (newArr[i] > secondBestSumo.power) {
                    secondBestSumo.power = newArr[i];
                    secondBestSumo.index = i;
                }
            }
        }
        if(bestSumo.index > secondBestSumo.index){
            newArr.splice(bestSumo.index, 1);
            newArr.splice(secondBestSumo.index, 1);
        }
        else{
            newArr.splice(secondBestSumo.index, 1);
            newArr.splice(bestSumo.index, 1);
        }
        newArr.push(bestSumo.power - secondBestSumo.power);
        // console.log(`${bestSumo.power} VS. ${secondBestSumo.power}`);
        // console.log(newArr);
    }
    return newArr
}

console.log(sumoWinner(testArr));
