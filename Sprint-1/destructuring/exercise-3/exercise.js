let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

let totalPrice = 0;

console.log('QTY     ITEM                TOTAL')

for (const {itemName, quantity, unitPricePence} of order) {
  price = ((quantity * unitPricePence) / 100);
  totalPrice += price;

  console.log(`${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${price.toFixed(2)}`);
}

console.log(`Total: ${totalPrice.toFixed(2)}`)