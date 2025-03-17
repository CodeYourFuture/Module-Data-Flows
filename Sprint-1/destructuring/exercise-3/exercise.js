let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
let totalPrice = 0
function receipt({itemName:ITEM, quantity:QTY, unitPricePence:TOTAL}){
  totalPrice +=  ((QTY * TOTAL) /100)
  finalPrice = (QTY *TOTAL/100).toFixed(2)
  
  return `${QTY.toString().padEnd(6)} ${ITEM.padEnd(25)} ${finalPrice} `
  
}
console.log("QTY    ITEM                     TOTAL")
console.log(order.map(receipt).join("\n"))
console.log(`Total: ${totalPrice.toFixed(2)}`)