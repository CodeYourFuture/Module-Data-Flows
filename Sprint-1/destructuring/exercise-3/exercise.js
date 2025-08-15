let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printHeading(){
  console.log('QTY'.padEnd(7),'ITEM'.padEnd(19),'TOTAL');
}

function printOrder(order) {
  const finalTotal = order.reduce((acc,{itemName, quantity, unitPricePence}) => {
  const total = (unitPricePence * quantity) / 100;
  console.log(`${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${total.toFixed(2)}`);
  return acc + total;
},0)
console.log( `\nTotal: ${finalTotal.toFixed(2)}`)
}

printHeading()
printOrder(order)
