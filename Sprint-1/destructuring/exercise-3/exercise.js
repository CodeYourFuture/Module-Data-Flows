let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

//  the header
console.log("QTY     ITEM                TOTAL")
// culculade total
let grandTotalPence = 0;
order.forEach(({itemName, quantity, unitPricePence })=>{
  totalPrPenc = quantity * unitPricePence;
  grandTotalPence += totalPrPenc;
  // added toString()to insuer the guantity is string because  padEnd() only works with string
  console.log(`${quantity.toString().padEnd(8," ")}${itemName.padEnd(20," ")}${(totalPrPenc / 100).toFixed(2)}`)
})
// grand total
let grandTotalPounds = grandTotalPence / 100;
console.log("\nTotal: " + grandTotalPounds.toFixed(2));
