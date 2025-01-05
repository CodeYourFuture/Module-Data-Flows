function convertToNewRoman(n) {
    let roman = "";

    // Thousands place (1000)
    while (n >= 1000) {
        roman += "M";
        n -= 1000;
    }

    // Hundreds place (500)
    while (n >= 500) {
        roman += "D";
        n -= 500;
    }

    // Hundreds place (100)
    while (n >= 100) {
        roman += "C";
        n -= 100;
    }

    // Tens place (50)
    while (n >= 50) {
        roman += "L";
        n -= 50;
    }

    // Tens place (10)
    while (n >= 10) {
        roman += "X";
        n -= 10;
    }

    // Ones place (5)
    while (n >= 5) {
        roman += "V";
        n -= 5;
    }

    // Ones place (1)
    while (n >= 1) {
        roman += "I";
        n -= 1;
    }

    return roman;
}

console.log(convertToNewRoman(4));
console.log(convertToNewRoman(77));
console.log(convertToNewRoman(1));



module.exports = convertToNewRoman;
