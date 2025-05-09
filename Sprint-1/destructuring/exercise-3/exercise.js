let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


function receipt (arr){
  console.log("QTY      ITEM                 TOTAL");
  let grandTotal = 0;
for (const {itemName, quantity, unitPricePence} of arr){
  let total = (quantity * unitPricePence) / 100;
  grandTotal += total;
  // Format the output to align columns
  let qtystr = quantity.toString().padEnd(8);
  let item = itemName.padEnd(20);
  let totalStr =total.toFixed(2).padEnd(5);
 console.log(qtystr,item, totalStr)

}
console.log("Total:",grandTotal.toFixed(2));
}

receipt(order);