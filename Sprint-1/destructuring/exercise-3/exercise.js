let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printReceipt(order) {  
  console.log("QTY      ITEM                 TOTAL");

  for (const item of order) {
    const {itemName, quantity, unitPricePence} = item;
    const itemTotalPence = quantity * unitPricePence;
    const itemTotal = (itemTotalPence / 100).toFixed(2);
    const quantityText = quantity.toString();
    


    console.log(quantityText.padEnd(8), itemName.padEnd(20), itemTotal);
  }
}

printReceipt(order);