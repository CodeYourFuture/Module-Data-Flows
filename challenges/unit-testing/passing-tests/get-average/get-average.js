// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
const list = [4, "-", 8, 11, "hello", "57", 1, 2];
function average(list) {
    let sum = 0;
    let numCount = 0;
    for (let item in list){
        if (typeof(list[item]) == "number"){
            sum += list[item];
            numCount += 1;
        }
    }
    console.log(sum);
    console.log(numCount);
    return (sum / numCount).toFixed(1);
}
average(list);
console.log(average(list));
module.exports = average;
