let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printoutOrder(order){
  console.log('Qty  Item Name             Total');
  console.log('-----------------------------------');
  for (let i = 0; i < order.length; i++) {
    let { itemName, quantity, unitPricePence } = order[i];
    let total = (quantity * unitPricePence / 100).toFixed(2);

    // Format and align columns
    let qtyStr = String(quantity).padEnd(4);              // "1   "
    let nameStr = itemName.padEnd(20);                    // "Hot cakes          "
    let totalStr = `£${total}`.padStart(6);               // " £2.32"

    console.log(`${qtyStr} ${nameStr} ${totalStr}`);
  }
  console.log('-----------------------------------');
  let total = order.reduce((acc, item) => acc + (item.quantity * item.unitPricePence), 0);
  console.log(`Total: £${(total / 100).toFixed(2)}`);
  console.log('-----------------------------------');
  console.log('Thank you for your order!');
}
printoutOrder(order);