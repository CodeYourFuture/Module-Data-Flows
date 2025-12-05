let order = [
  { itemName: "Hot Cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// step 1: print the header
console.log("QTY\tITEM\t\t\tTOTAL");

// step 2: create a variable to store the total
let grandTotal = 0;

// step 3: loop through the order
for (let menuItem of order) {
  // step 4: destructuring values from the object
  const { itemName, quantity, unitPricePence } = menuItem;

  // step 5: calculate total for that item
  const total = (quantity * unitPricePence) / 100; // convert pence to pounds

  // step 6: add to the final total
  grandTotal += total;

  // step 7: print the row with formatting
  console.log(
    `${quantity}\t${itemName.padEnd(20)}\t${total.toFixed(2)}`
  );
}
 // step 8: print the final total
 console.log(`\nTotal: ${grandTotal.toFixed(2)}`);