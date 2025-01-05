// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
let numbers = [4, "-", 8, 11, "hello", "57", 0, 2, "hi", 22];
function average(numbers) {
    let numCount = 0;
    for (let item in numbers){
        if (typeof(numbers[item]) == "number"){
            numCount += 1;
        }
    }
    console.log(numCount);
    return numCount;
}
average(numbers);
module.exports = average;
