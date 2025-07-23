let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
let sum
function receipt (order){
  for({itemName,quantity,unitPricePence} of order) {
    order.reduce((acc,curr)=> acc +curr,0)
    console.log(`QTY ${quantity}  ITEM ${itemName} TOTAL ${unitPricePence}`)

  }
}
receipt(order)