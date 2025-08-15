let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
function takeawayOrder(order){
  let total = 0
  console.log('QTY     ITEM             TOTAL \n');  
  order.forEach(item => {
    let {itemName, quantity,unitPricePence } = item
    let price = unitPricePence*quantity /100 
    console.log(`${String(quantity).padEnd(6)}${(itemName.padEnd(19))}${(price).toFixed(2)}`);
    total+=price
})
  console.log(` \nTotal: ${(total).toFixed(2)}`);
}
takeawayOrder(order)
