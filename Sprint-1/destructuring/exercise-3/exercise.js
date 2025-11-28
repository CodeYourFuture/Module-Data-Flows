let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function Receipt(order){
  let total = 0 
  let qtyWidth = 3
  let itemWidth = 4
  const receiptLines = order.map(({itemName, quantity, unitPricePence}) => {
    const itemTotalPounds = (quantity * (unitPricePence / 100));
    qtyWidth = Math.max(qtyWidth, String(quantity).length);
    itemWidth = Math.max(itemWidth, itemName.length);
    return { itemName, quantity, itemTotalPounds };
  })
  console.log('QTY'.padEnd(qtyWidth+4), 'ITEM'.padEnd(itemWidth+3), 'TOTAL');
  receiptLines.forEach(({itemName, quantity, itemTotalPounds}) => {
    total += itemTotalPounds;
    console.log(String(quantity).padEnd(qtyWidth+4), itemName.padEnd(itemWidth+3), `${itemTotalPounds.toFixed(2)}`);
  })
  console.log(`\nTotal: ${total.toFixed(2)}`);
  
}

Receipt(order);