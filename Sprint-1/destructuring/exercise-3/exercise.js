let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

//this function calculate the total of our array of objects and return the total in pounds.
function findTotal(arrayInput) {
  let priceItem = [];
  for (let n of arrayInput) {
    let { itemName, quantity, unitPricePence } = n;
    priceItem.push(unitPricePence * quantity);  //i pushed all individual item prices to my array.
  }
  return priceItem.reduce((a, b) => a + b, 0) / 100; //suming using reduce method , and change the value to pounds
}
// Print the receipt with itemized list and total
function receiptPrinter(arrayInput) {
  let headerLine = "QTY     ITEM                TOTAL";
  let resultArr = [];
  let total = findTotal(arrayInput); //i get the total using higher order function findTotal.
  for (let n of arrayInput) {
    let { itemName, quantity, unitPricePence } = n;
    let totalItemPrice = (unitPricePence * quantity) / 100;
    let quantityCol = String(quantity).padEnd(5); //this makes sure that the quantity column is 5 characters long.
    let itemCol = itemName.padEnd(20);
    let priceCol = totalItemPrice.toFixed(2).padStart(5);
    resultArr.push(`${quantityCol}${itemCol}${priceCol}`); // storing each item's data in an array. no need to make space between the columns since the padEnd and padStart methods are used.
  }  
  //the content of the reciept to be seen in the console
  console.log(headerLine);
  console.log(resultArr.join("\n"));
  console.log(`Total: ${total.toFixed(2)}`);
}

receiptPrinter(order);
