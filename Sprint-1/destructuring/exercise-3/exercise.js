let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printReceipt(orderList) {
  const header = "QTY".padEnd(7, " ") + "ITEM".padEnd(19, " ") + "TOTAL";
  console.log(header);

  let totalPounds = 0;
  for (const { itemName, quantity, unitPricePence } of orderList) {
    console.log(
      `${String(quantity).padEnd(7, " ")}${String(itemName).padEnd(19, " ")}${((unitPricePence * quantity) / 100).toFixed(2)}`
    );
    totalPounds += (unitPricePence * quantity) / 100;
  }
  console.log(`\nTotal: ${totalPounds.toFixed(2)}`);
}

printReceipt(order);
/*
```
QTY     ITEM                TOTAL
1       Hot Cakes           2.32
2       Apple Pie           2.78
1       Egg McMuffin        2.80
1       Sausage McMuffin    3.00
2       Hot Coffee          2.00
4       Hash Brown          1.60

Total: 14.50
```
*/
