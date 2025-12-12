let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
function receipt(arr){
  let total=0;
  const firstLine="QTY".padEnd(8)+"ITEM".padEnd(20)+"Total";
  console.log(firstLine);


arr.forEach(({itemName,quantity,unitPricePence})=> {
  itemPrice=unitPricePence*quantity/100;
  const line=String(quantity).padEnd(8)+itemName.padEnd(20)+itemPrice.toFixed(2);
  console.log(line);
  total+=itemPrice
})
console.log(`\nTotal:  ${total.toFixed(2)}`)
}

receipt(order);