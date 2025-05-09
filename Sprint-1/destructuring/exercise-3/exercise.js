let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printReceipt(order) {
  console.log("QTY\tITEM\t\t\tTOTAL");

  let totalPrice = 0;

  order.forEach(({ itemName, quantity, unitPricePence }) => {
    let totalItemPrice = (unitPricePence * quantity) / 100; // Convert pence to pounds
    totalPrice += totalItemPrice;

    // Format output for better alignment
    console.log(`${quantity}\t${itemName.padEnd(25)} £${totalItemPrice.toFixed(2)}`);
  });

  console.log("\nTotal: £" + totalPrice.toFixed(2));
}


printReceipt(order);