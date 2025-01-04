function add(numbers){
    let sum = 0;
    if(numbers == ""){
        return "there is no number";
    }
    let listNumber = numbers.split(",");
    for(let item in listNumber){
        sum += Number(listNumber[item]);
    }
    return sum;
}

console.log(add(""));
console.log(add("3"));
console.log(add("3,2,4,1"));
console.log(add("3,2,4,1,33,45,12,56,78, 34"));

