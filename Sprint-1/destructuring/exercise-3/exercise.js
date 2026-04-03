let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printReceipt(order)
{
  let sum = 0;
  console.log("QTY".padEnd(5) + "ITEM".padEnd(20) + "TOTAL".padStart(10));
  for (const { itemName, quantity, unitPricePence } of order) {
    let paddedPrice = unitPricePence.toString().padStart(3, "0");
    let pounds = paddedPrice.slice(0, 1);
    let pence = paddedPrice.slice(1).padEnd(2, "0");
    let total = `${pounds}.${pence}` * quantity;
    let price = total.toFixed(2);
    sum += total;
    let result =
      String(quantity).padEnd(5) + itemName.padEnd(20) + price.padStart(10);
    console.log(result);
  }
  console.log();
  return `Total: ${sum.toFixed(2)}`;
  
}


console.log(printReceipt(order));