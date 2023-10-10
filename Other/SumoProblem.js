// Define an array of power levels for sumo wrestlers
const testArr = [1, 3, 5, 8, 2, 3, 7];

// Define a function to determine the winner in a sumo competition
function sumoWinner(arr) {
    // Create a copy of the input array
    const newArr = arr;

    // Continue looping until there is only one sumo wrestler left in the array
    while (newArr.length > 1) {
        // Initialize objects to keep track of the best and second-best sumo wrestlers
        let bestSumo = {
            power: 0,
            index: 0,
        };
        let secondBestSumo = {
            power: 0,
            index: 0,
        };

        // Iterate through the array to find the best and second-best sumo wrestlers
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] > bestSumo.power) {
                // If the current sumo wrestler has more power than the best sumo so far, update bestSumo
                bestSumo.power = newArr[i];
                bestSumo.index = i;
            } else {
                if (newArr[i] > secondBestSumo.power) {
                    // If the current sumo wrestler has more power than the second-best sumo so far, update secondBestSumo
                    secondBestSumo.power = newArr[i];
                    secondBestSumo.index = i;
                }
            }
        }

        // Determine the indexes of the best and second-best sumo wrestlers and remove them from the array
        if (bestSumo.index > secondBestSumo.index) {
            newArr.splice(bestSumo.index, 1);
            newArr.splice(secondBestSumo.index, 1);
        } else {
            newArr.splice(secondBestSumo.index, 1);
            newArr.splice(bestSumo.index, 1);
        }

        // Calculate the difference in power between the best and second-best sumo wrestlers and push it into the array
        newArr.push(bestSumo.power - secondBestSumo.power);

        // Continue the loop until there is only one sumo wrestler left in the array
    }

    // Return the final array with the winner's power level
    return newArr;
}

// Call the sumoWinner function with the testArr and log the result to the console
console.log(sumoWinner(testArr));
