

/*## Expected result

```
QTY     ITEM                TOTAL
1       Hot Cakes           2.32
2       Apple Pie           2.78
1       Egg McMuffin        2.80
1       Sausage McMuffin    3.00
2       Hot Coffee          2.00
4       Hash Brown          1.60

Total: 14.50*/

let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function orderReceipt() {

  console.log("QTY      ITEM    Total");
 

  // Loop through the order array
 for (let i=0; i< order.length; i++){
  let { itemName, quantity, unitPricePence } = order[i]; 

  console.log(`${quantity}    ${itemName}  ${unitPricePence} `);
  

 }
};

orderReceipt();

function sumTotal() {
  let total = 0; // Initialize total

  // Loop through the order array
  for (let i = 0; i < order.length; i++) {
    let { quantity, unitPricePence } = order[i];
    total += quantity * unitPricePence;
  }

  return total; // Return the total cost in pence
}

// Call the function
let totalCostPence = sumTotal();

// Convert to pounds and format as 2 decimal places
let totalCostPounds = (totalCostPence / 100).toFixed(2);

//  result
console.log(`Total cost: £${totalCostPounds}`);