let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
function penceToPounds(pence) {
  return (pence / 100).toFixed(2);
}


console.log("QTY     ITEM                TOTAL");


let totalCost = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  let totalItemCost = quantity * unitPricePence;
  totalCost += totalItemCost;

  console.log(
    `${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${penceToPounds(totalItemCost)}`
  );
});

// Print Total
console.log(`\nTotal: ${penceToPounds(totalCost)}`);