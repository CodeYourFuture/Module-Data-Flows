let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


function receiptAndCosts(order) {
  let total = 0;
  const quantitySpace = 8;
  const itemSpace = 20;
  const costSpace = 5
  let receipt = [`${'QTY'.padEnd(quantitySpace, " ")}${'ITEM'.padEnd(itemSpace, " ")}${'TOTAL'.padEnd(costSpace, " ")}`]
  order.map(({itemName, quantity, unitPricePence}) => {
    receipt.push(`${String(quantity).padEnd(quantitySpace, " ")}${itemName.padEnd(itemSpace, " ")}${String(Number(unitPricePence / 100 * quantity).toFixed(2)).padEnd(costSpace, " ")}`)
    total += unitPricePence / 100 * quantity
  })
  receipt.push(" ")
  receipt.push(`Total: ${total.toFixed(2)}`)
  return receipt.join("\n")
}

console.log(receiptAndCosts(order))