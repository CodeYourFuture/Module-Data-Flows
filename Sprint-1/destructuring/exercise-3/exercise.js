let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
function receipt(order){
  let total = 0;
  console.log("QTY        ITEM               TOTAL")
  for(let index in order){
    let {itemName, quantity, unitPricePence} = order[index];
  
    console.log(quantity + "          " + itemName + " ".repeat(19 - itemName.length) + unitPricePence);
    total += unitPricePence;
   

  }
  console.log("Total:  " + total);
}

receipt(order);
