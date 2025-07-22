let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function getTotalOfOrder (order) {
  let Total = 0;
  console.log("QTY".padEnd(8), "ITEM".padEnd(24), "TOTAL");
    order.forEach(({itemName, quantity, unitPricePence}) => {
      const QTY = quantity;
      const ITEM = itemName;
      const TOTAL = ((unitPricePence * quantity)/100);
      Total = Total + TOTAL;
      console.log(`${String(QTY).padEnd(6)}   ${String(ITEM).padEnd(24)} ${(TOTAL.toFixed(2)).padStart(4)}`);
    })
  
    console.log(`\nTotal:  ${Total.toFixed(2)}`)
}


getTotalOfOrder(order);