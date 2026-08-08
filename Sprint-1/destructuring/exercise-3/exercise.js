let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// In exercise.js write a program that will take the `order` array as input and print out a receipt for the order.
// Log each individual item to the console.
// Log the total cost of the order to the console.
// Use object destructuring to access the values you need from each item.
// Pay attention to the exact formatting of the expected result.

// Expected result

// QTY     ITEM                TOTAL
// 1       Hot Cakes           2.32
// 2       Apple Pie           2.78
// 1       Egg McMuffin        2.80
// 1       Sausage McMuffin    3.00
// 2       Hot Coffee          2.00
// 4       Hash Brown          1.60

// Total: 14.50

let total = 0;
console.log("QTY, ITEM, TOTAL");
for (const { itemName, quantity, unitPricePence } of order) {
  const itemTotal = quantity * unitPricePence / 100
  total += itemTotal;
  console.log(
    `${quantity} ${itemName} ${(itemTotal).toFixed(2)}`
  );
}

console.log(`\nTotal: ${(total).toFixed(2)}`);
