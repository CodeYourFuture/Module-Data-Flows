let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];



function printReceipt(order) {
  let total = 0;
  console.log("QTY  ITEM                 TOTAL");
  order.forEach(record => {
    const { itemName, quantity, unitPricePence } = record;
    const lineTotal = quantity * unitPricePence;
    total += lineTotal;

    console.log(
      String(quantity).padEnd(5) +
      itemName.padEnd(20) +
      convertPenceToPound(lineTotal).padStart(6)
    );
  });

  console.log("\nTotal: " + convertPenceToPound(total));
}

function convertPenceToPound(pence) {
  const pounds = Number(pence) / 100;
  return pounds.toFixed(2);
}

printReceipt(order);
