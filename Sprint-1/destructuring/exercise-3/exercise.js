let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Falafel with salad", quantity: 1, unitPricePence: 224},
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

let sortedOrder = order.sort((a, b) => a.itemName.length - b.itemName.length);
let longestItemName = sortedOrder.length - 1;
console.log(sortedOrder[5]);
function receipt(order){
  let total = 0;
  console.log("QTY        ITEM                 TOTAL")
  for(let index in order){
    let {itemName, quantity, unitPricePence} = order[index];
    if((sortedOrder[longestItemName].itemName.length - itemName.length) == 0){
      let unitPriceFormatted = (unitPricePence / 100).toFixed(2); // Format to 2 decimal places
      console.log(quantity + "          " + itemName + "   " + unitPriceFormatted);

    }
    else{
      let unitPriceFormatted = (unitPricePence / 100).toFixed(2); // Format to 2 decimal places
      console.log(quantity + "          " + itemName + " ".repeat(sortedOrder[longestItemName].itemName.length - itemName.length) + "   " + unitPriceFormatted);

    }
    total += unitPricePence;
   

  }
  console.log("Total:  " + (total / 100).toFixed(2));
}

receipt(order);
