let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];



const headQuantity = 'QTY'.padEnd(9);
const headItem = 'ITEM'.padEnd(18);

console.log(`${headQuantity}${headItem} TOTAL`);

const isOrder =  (number) => typeof number.quantity==='number';

order.forEach(({itemName,quantity,unitPricePence}) => {
  const totalUnit = quantity*unitPricePence;
  const orderNumber = Number(quantity);
  const nameItem = String(itemName);
  const orderNumberAlign = String(orderNumber).padEnd(9);
  const nameItemAlign= nameItem.padEnd(18)

  console.log(`${orderNumberAlign} ${nameItemAlign}${totalUnit}`);
});



const total = order.reduce((accumulator,item) =>{
  itemTotal =item.quantity*item.unitPricePence;
  return accumulator + itemTotal;
},0)

console.log(`Total: ${total}`);