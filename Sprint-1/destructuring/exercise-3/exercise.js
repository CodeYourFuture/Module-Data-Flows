let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

//We want to log QTY, ITEM, and TOTAL once at the beginning of the receipt
//Then we want to log each item in the order array, and align the columns
//Finally, we want to log the total price of the order
function printReceipt(order){
  let total=0
  console.log("QTY     ITEM                  TOTAL")
  console.log("--------------------------------");

  order.forEach(({itemName, quantity, unitPricePence})=>{
    let totalItem=quantity*unitPricePence/100
    total+=totalItem
    console.log(
      `${quantity.toString().padEnd(7)} ${itemName.padEnd(21)} £${totalItem.toFixed(2)}`
    );
  })
  console.log(`Total: ${total.toFixed(2)}`)
}
printReceipt(order);
// console.log("QTY     ".length) ouais c'est 8
console.log("ITEM                  ".length) 
// ouais c'est 22