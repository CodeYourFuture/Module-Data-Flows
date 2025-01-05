let arr = [12, 33, 22, 45, 88, 54];
function getLargestNumber(array) {
  let largestNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  console.log(largestNumber);
  console.log(array)
  return largestNumber;
}
getLargestNumber(arr);
module.exports = getLargestNumber;
