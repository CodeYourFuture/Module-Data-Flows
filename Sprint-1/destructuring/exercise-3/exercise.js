let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function createReceipts(array){
  console.log (`QTY`.padEnd(6)+`Item`.padEnd(21)+`Total`.padEnd(7))
  let sumTotal = 0
  for (const {itemName, quantity, unitPricePence} of array){
    const total = (unitPricePence*quantity/100).toFixed(2)
    console.log (`${quantity.toString().padEnd(5)} ${itemName.padEnd(20)} ${total.toString().padEnd(6)}`)
    sumTotal = sumTotal+ Number(total)
  }
  console.log("")
  console.log(`Total: ${sumTotal.toFixed(2)}`)
}

createReceipts(order)