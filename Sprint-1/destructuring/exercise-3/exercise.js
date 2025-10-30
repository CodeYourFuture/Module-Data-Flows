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

  let receipt = []

  function orderLineFormatting(...args) {
    const orderLineSpacing = [8, 20, 5]
    let formattedOrderLine = ''
    for (let index = 0; index < args.length; index++) {
      formattedOrderLine += `${String(args[index]).padEnd(orderLineSpacing[index], " ")}`
    }
    return formattedOrderLine
  }

  receipt.push(orderLineFormatting("QTY", "ITEM", "TOTAL"));

  order.forEach(({itemName, quantity, unitPricePence}) => {
    const subTotal = (unitPricePence / 100 * quantity).toFixed(2)
    receipt.push(orderLineFormatting(quantity, itemName, subTotal))
    total += unitPricePence / 100 * quantity
  })

  receipt.push(" ")
  receipt.push(`Total: ${total.toFixed(2)}`)
  return receipt.join("\n")
}

console.log(receiptAndCosts(order))