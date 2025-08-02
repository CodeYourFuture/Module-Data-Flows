let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

//declare spacing
const qtyWidth = 8; // Width for QTY column
const itemWidth = 20; // Width for ITEM column
const totalWidth = 10; // Width for TOTAL column

//display header
console.log(
  "QTY".padEnd(qtyWidth) +
  "ITEM".padEnd(itemWidth) +
  "TOTAL".padEnd(totalWidth)
);

// display the order list
let total = 0;
for(item of order)
{
  let {itemName, quantity, unitPricePence} = item;
  let subtotal = (quantity * unitPricePence);
  console.log(quantity.toString().padEnd(qtyWidth) + itemName.padEnd(itemWidth) + (quantity*unitPricePence/100).toFixed(2).padEnd(totalWidth));
  total = total + (quantity*unitPricePence);
}

//display the total
console.log(`\nTotal: ` + (total/100).toFixed(2));