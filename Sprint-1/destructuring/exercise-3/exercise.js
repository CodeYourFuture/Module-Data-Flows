let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

let total = 0;

order.forEach(item => {
  const { itemName, quantity, unitPricePence } = item;

  const itemTotal = unitPricePence * quantity;
  total += itemTotal;

  const formattedPrice = (itemTotal / 100).toFixed(2); 
  console.log(`${quantity} ${itemName} - £${formattedPrice}`);
});

const formattedTotal = (total / 100).toFixed(2);
console.log(`Total: £${formattedTotal}`);