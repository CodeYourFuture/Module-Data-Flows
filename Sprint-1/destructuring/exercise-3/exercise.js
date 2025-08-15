let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Pad function for nice formatting
function formatRow(item, qty, total) {
  const col1 = String(qty).padEnd(6);               
  const col2 = item.padEnd(20);                     
  const col3 = (Number(total) / 100).toFixed(2).padStart(6);        
  return `${col1}${col2}${col3}`;
}

function headerFixer (item, qty, total){
  const col1 = qty.padEnd(6);               
  const col2 = item.padEnd(20);                     
  const col3 = total.padStart(6);        
  console.log(`${col1}${col2}${col3}`);
}

// print header 
headerFixer("QTY", "ITEM", "TOTAL")
console.log("-".repeat(32))

// print the column

order.forEach(({itemName, quantity, unitPricePence}) => {
  console.log(formatRow(itemName, quantity, unitPricePence))
});
console.log("-".repeat(32))