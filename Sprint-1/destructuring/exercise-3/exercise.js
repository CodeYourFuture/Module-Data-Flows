let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
function receipt(order) {
  let sum = 0;
  console.log("QTY   ITEM                TOTAL"); //Prints a header for the table
  for (let { itemName, quantity, unitPricePence } of order) {
    let lineTotal = (quantity * unitPricePence) / 100;//Converts pence to pounds 
    sum += lineTotal; //keeps a running total of all order cost.

  console.log(
    `${quantity.toString().padEnd(6)}${itemName.padEnd(22)}${lineTotal.toFixed(2)}`//.padEnd(n) adds spaces to the end of a string until it reaches n characters long
    );
  }

  console.log(`\nTotal: ${sum.toFixed(2)}`); // \n adds a blank line before console.log for better readibility.
}

receipt(order);
