let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

order.map(({ itemName, quantity, unitPricePence }) => {
  let totalPence = quantity * unitPricePence;
  let pence = totalPence % 100;
  let paddedPence = String(pence).padStart(2, "0");
  let pounds = String(totalPence).substring(0, String(pence).length - 1);
  let priceInPoundsAndPence=`${pounds}.${paddedPence}`
  
});
