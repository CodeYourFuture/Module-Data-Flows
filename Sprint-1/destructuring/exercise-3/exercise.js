let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

const newOrder=order.map(({quantity,itemName,unitPricePence})=>({quantity,itemName,unitPricePence:twoDigitNumber(unitPricePence*quantity)}))

function twoDigitNumber(value){
  return (value/100).toFixed(2)
}
function totalResult(newOrder){
  return newOrder.reduce((a,{unitPricePence})=>a+Number(unitPricePence),0).toFixed(2)

}
console.log(newOrder)
console.log("Total: "+totalResult(newOrder))