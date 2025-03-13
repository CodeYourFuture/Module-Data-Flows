let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 28000 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

const nameLength = findMaxItemNameLength(order, 'itemName')
const totalLength = findMaxItemNameLength(order, 'unitPricePence')

console.log({nameLength, totalLength})

function printIndividualItem({itemName, quantity, unitPricePence}) {
  const priceInPence = String(unitPricePence * quantity)
  const priceInPounds = priceInPence.replace(/^(.{1})/, '$1.');
 
  console.log(`${quantity}\t${itemName.padEnd(nameLength," ")}   ${priceInPounds}`)
  return quantity
}

console.log(`QTY\tITEM   TOTAL`)
order.map(printIndividualItem)
console.log("")
console.log("Toatal")



function findMaxItemNameLength(order, key) {
  let ggg = order.map((item) => String(item[key]).length)
  return Math.max(...ggg)
}
console.log(findMaxItemNameLength(order))

// console.log(Math.max(...order.map(calculateItemNameLength)))
