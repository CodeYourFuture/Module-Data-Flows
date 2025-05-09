let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


let total = 0;

console.log("QTY     ITEM                TOTAL");

order.forEach(({ quantity, itemName, unitPricePence }) => {
  
    const itemTotal = quantity * unitPricePence;
    total += itemTotal;
    console.log(`${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${(itemTotal/100).toFixed(2)}`);
});

console.log(`\nTotal: ${(total/100).toFixed(2)}`);