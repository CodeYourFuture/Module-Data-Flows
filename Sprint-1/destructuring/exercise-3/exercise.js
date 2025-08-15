let order = [
  { itemName: "Hot cakes", quantity: 12, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function createReceipt(order){
  let total = 0;
  console.log("QTY".padEnd(7) + "ITEM".padEnd(30) + "TOTAL".padStart(10));

  order.forEach(element => {
    let {quantity, itemName, unitPricePence} = element;
    let totalPriceItem = (quantity * unitPricePence) /100;
    total += totalPriceItem;
    console.log(String(quantity).padEnd(7)+ itemName.padEnd(30) + totalPriceItem.toFixed(2).padStart(10))
  });
  console.log(`Total: ${total.toFixed(2)}`);
}
createReceipt(order);