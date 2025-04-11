let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY     ITEM                    TOTAL");

let totalCostPence = 0;

for (const item of order) {
  const { itemName, quantity, unitPricePence } = item;
  const totalItemCostPence = quantity * unitPricePence;
  totalCostPence += totalItemCostPence;
  const totalItemCostPounds = (totalItemCostPence / 100).toFixed(2);
  console.log(
    `${quantity.toString().padEnd(6)} ${itemName.padEnd(24)} ${totalItemCostPounds}`
  );
}

const totalCostPounds = (totalCostPence / 100).toFixed(2);
console.log("\nTotal: " + totalCostPounds);