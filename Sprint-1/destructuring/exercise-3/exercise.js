let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


// 1. Create a function to calculate the total cost of an order


let totalCost = 0; // declare the total cost of the order by assigning it to 0;

order.forEach(item => { // implemented forEach method to iterate over the order array and calculate the total cost of the order and total.
  const { quantity, itemName: itemName, unitPricePence } = item; // using object destruction to extract the value for each item in the order array.
   const total = quantity * (unitPricePence / 100).toFixed(2); // we declared a variable total to calculate the quality * the unitpricepence and divided by 100 to convert pence to pounds and toFixed in two decimal place.

  console.log(`${quantity} ${itemName} ${total.toFixed(2)}`); //  we used console.log to log the quantity, Name, total for each item.
  totalCost += total; // we added total to the totalCost variable.
}); 

console.log(`Total cost: ${totalCost.toFixed(2)}`); // we console.log totalcost and implemented  toFixed method to convert in to two decimal place.