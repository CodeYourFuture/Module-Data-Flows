let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

const nameLength = findMaxItemNameLength(order, 'itemName')

let totalInPence = 0
for (item of order) {
  totalInPence += item.unitPricePence * item.quantity
}

console.log(`QTY\t${"ITEM".padEnd(nameLength," ")}   TOTAL`)
order.map(printIndividualItem)
console.log("")
console.log(`Total: ${penceToPounds(String(totalInPence))}`);

function printIndividualItem({itemName, quantity, unitPricePence}) {
  const itemPriceInPence = String(unitPricePence * quantity)
  const itemPriceInPounds = penceToPounds(itemPriceInPence);
 
  console.log(`${quantity}\t${itemName.padEnd(nameLength," ")}   ${itemPriceInPounds}`)
  return quantity
}

function penceToPounds (penceString) {
    const paddedPenceNumberString = penceString.padStart(3, "0");
    const pounds = paddedPenceNumberString.substring(
      0,
      paddedPenceNumberString.length - 2
    );
    
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");
    
    return (`${pounds}.${pence}`);
}

function findMaxItemNameLength(order) {
  let ItemNameLengthList = order.map(({itemName}) => itemName.length )
  return Math.max(...ItemNameLengthList)
}

// this issue requires more than 1 hour
// what would be better to use: regexp or pence to pound conversion