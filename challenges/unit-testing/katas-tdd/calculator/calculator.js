function add(numbers){
    let sum = 0;
    if (numbers === ""){
        return "there is no number";
    }
    let listNumber = numbers.split(",").map(Number);
    
    let negativeNumbers = [];
    for (let elem in listNumber){
        if (listNumber[elem] < 0){
            negativeNumbers.push(listNumber[elem]) 
        }
    }
    if (negativeNumbers.length > 0){
        throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
    else {
        for (let item in listNumber){
            if (listNumber[item] > 1000){
                sum += 0;
            }
            else {
                sum +=listNumber[item];
            }
            
        }
    }
    
    return sum;
}

console.log(add(""));
console.log(add("3"));
console.log(add("3,2,4,1"));
console.log(add("3,2,4,1,33,45,12,56,78, 34"));
console.log(add("2,3,1001"));
console.log(add("3,2,4,1,-11,-4"));