let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


function printReceipt(order) {
  let generalTotal = 0;

  order.forEach(({quantity,itemName,unitPricePence}) => {
    if (quantity != 0 && unitPricePence.toFixed(2)/100 ) {
      const itemPriceTotal = (quantity * unitPricePence.toFixed(2)/100);
      generalTotal = generalTotal + itemPriceTotal;

    console.log(`${quantity}\t${itemName.padEnd(16)}\t\t${itemPriceTotal}`);
    }
  });

  console.log(`\nTotal: ${generalTotal.toFixed(2)}`);
}

console.log("QTY\tITEM\t\t\t\tTOTAL");
printReceipt(order);




// Chatgpt's Solution

/*
function printReceipt(order) {
  console.log("QTY\tITEM\t\t\tTOTAL");
  let totalCost = 0;

  order.forEach(({ itemName, quantity, unitPricePence }) => {
    const itemTotal = (quantity * unitPricePence) / 100;
    totalCost += itemTotal;
    console.log(`${quantity}\t${itemName.padEnd(16)}\t${itemTotal.toFixed(2)}`);
  });

  console.log(`\nTotal: ${totalCost.toFixed(2)}`);
}

console.log("\nReceipt:");
printReceipt(order);

*/