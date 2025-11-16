let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printReceipt(order){
  let total = 0 
  let qtyWidthMax = 3
  let itemWidthMax = 4
  const receiptLines = order.map(({itemName, quantity, unitPricePence}) => {
    const itemTotalPounds = (quantity * (unitPricePence / 100));
    qtyWidthMax = Math.max(qtyWidthMax, String(quantity).length);
    itemWidthMax = Math.max(itemWidthMax, itemName.length);
    return { itemName, quantity, itemTotalPounds };
  })
  console.log('QTY'.padEnd(qtyWidthMax+4), 'ITEM'.padEnd(itemWidthMax+3), 'TOTAL');
  receiptLines.forEach(({itemName, quantity, itemTotalPounds}) => {
    total += itemTotalPounds;
    console.log(String(quantity).padEnd(qtyWidthMax+4), itemName.padEnd(itemWidthMax+3), `${itemTotalPounds.toFixed(2)}`);
  })
  console.log(`\nTotal: ${total.toFixed(2)}`);
  
}

printReceipt(order);