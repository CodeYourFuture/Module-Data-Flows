let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function takeoutOrder(){
  console.log(`QTY             ITEM                     TOTAL`)
 let Total = 0;

  for(const {itemName,quantity,unitPricePence} of order){
  const price = quantity * unitPricePence;
  const priceInPounds = (price/100);
    Total += priceInPounds;
    console.log(`${quantity.toString().padEnd(14)}${itemName.padEnd(25)}${priceInPounds.toFixed(2).padStart(6)}`)
    
  }
  console.log(`\nTotal: ${Total.toFixed(2)}`)
}

    
takeoutOrder(order);