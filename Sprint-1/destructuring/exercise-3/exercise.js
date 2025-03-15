let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function orderSummary(params) {
  let totalCost = 0 

  console.log(
    "QTY".padEnd(8) +   // aligning each header with the rest of the list
    "ITEM".padEnd(16) + 
    "TOTAL".padStart(12)
  );
  order.forEach(({quantity, itemName, unitPricePence})=> {  // calculating the total quantity and displaying each item

    let total = (quantity * unitPricePence) / 100
    
    console.log(
      `${quantity.toString().padEnd(8)}` +  // aligning each Item with the header
      `${itemName.padEnd(16)}` + 
      `${(total.toFixed(2)).padStart(12)}`)
    return totalCost += total
  })
  console.log(`Total: ${totalCost.toFixed(2)}`)
}







// const [
//   {itemName:itemName1, quantity:quantity1, unitPricePence:unitPricePence1},
//   {itemName:itemName2, quantity:quantity2, unitPricePence:unitPricePence2},
//   {itemName:itemName3, quantity:quantity3, unitPricePence:unitPricePence3},
//   {itemName:itemName4, quantity:quantity4, unitPricePence:unitPricePence4},
//   {itemName:itemName5, quantity:quantity5, unitPricePence:unitPricePence5},
//   {itemName:itemName6, quantity:quantity6, unitPricePence:unitPricePence6}

// ] = order



function takeoutSummary(){
  
}
