let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function getTotalOfOrder() {
  let totalOfOrder = 0;
  console.log(`QTY      ITEM                     TOTAL`);
  order.forEach(({ itemName, quantity, unitPricePence }) => {
    const totalOfItem = (unitPricePence * quantity) / 100;
    totalOfOrder += totalOfItem;
    console.log(
      `${String(quantity).padEnd(6)}   ${String(itemName).padEnd(
        24
      )} ${totalOfItem.toFixed(2).padStart(4)}`
    );
  });

  console.log(`\nTotal:  ${totalOfOrder.toFixed(2)}`);
}

getTotalOfOrder();
