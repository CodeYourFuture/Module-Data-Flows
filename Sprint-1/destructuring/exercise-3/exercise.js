let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

order.forEach(({ itemName, quantity, unitPricePence }) => {
  let totalPence = quantity * unitPricePence;
  let pence = totalPence % 100;
  let paddedPence = String(pence).padStart(2, "0");
  let pounds = Math.floor(totalPence / 100);
  let priceEachItem = `${pounds}.${paddedPence}`;

  console.log(
    `${String(quantity).padEnd(7, " ")}${itemName.padEnd(
      20,
      " "
    )}${priceEachItem}`
  );
});
let sumAllPence = 0;
order.forEach(({ quantity, unitPricePence }) => {
  sumAllPence += quantity * unitPricePence;
});
let totalBillPence = sumAllPence % 100;
let paddedTotalBillPence = String(totalBillPence).padStart(2, "0");
let totalBillPounds = Math.floor(sumAllPence / 100);
let totalBill = `
Total: ${totalBillPounds}.${totalBillPence}`;

console.log(totalBill);
