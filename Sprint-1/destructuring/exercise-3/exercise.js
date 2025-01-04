let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];



function takeoutOrder(arrayInput) {
  let total = 0;
  console.log(`${"QTY".padEnd(8)}${"ITEM".padEnd(20)}${"TOTAL"}`);

  for (const { itemName, quantity, unitPricePence } of arrayInput) {
    let singularTotalPrice = (unitPricePence / 100) * quantity;
    //Can use padEnd to add spaces at the end of each variable
    //Total has to be adjusted according to pounds
    console.log(`${quantity.toString().padEnd(8)}${itemName.toString().padEnd(20)}${singularTotalPrice.toFixed(2)}`);
    total += singularTotalPrice;
  }
  console.log(`\nTotal price: ${total.toFixed(2)}`)


}

takeoutOrder(order);
