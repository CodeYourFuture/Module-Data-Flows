let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function creatReceipt(order){
  let total = 0;
  console.log("QTY     ITEM                             TOTAL");

  order.forEach(element => {
    let {quantity, itemName, unitPricePence} = element;
    let totalPriceItem = (quantity * unitPricePence) /100;
    total += totalPriceItem;
    console.log(`${quantity}     ${itemName.padEnd(20)}               ${totalPriceItem.toFixed(2)}`)
  });
  console.log(`Total: ${total.toFixed(2)}`);
}
creatReceipt(order);