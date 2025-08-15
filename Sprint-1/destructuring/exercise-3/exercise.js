let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// const newItem = oldItem.filter(({ propWeWant1, propWeWant2 }) => propWeWant 1 === 'propValue' && propWeWant2 === 'propValue2')



// - In `exercise.js`, you have been provided with a takeout order. Write a program 
// that will print out the receipt for this order.

//helpers
//cost of item in order
const calculateCostPerItemimPounds = ({ quantity, unitPricePence }) => {  
  let costPerItem = (quantity * unitPricePence)
  
  //in pounds
  costPerItem = costPerItem / 100;
  return costPerItem
}

//add cost of item to the order
const addTotalProp = (order) => {
  order.forEach(item => {
    const costPerOrder = calculateCostPerItemimPounds(item)
      //add total cost
    item.costPerOrder = costPerOrder;
  })
  }
  
//calculate total of order
const calculateOrderTotal = (order) => {
  let totalCost = 0;

  order.forEach(item => {
    //add total cost
    totalCost += item.costPerOrder;
  })
  return totalCost;
}
    
const createReceipt = (order) => {
  addTotalProp(order);
  // / - Log each individual item to the console.
  order.forEach(({ itemName, quantity, costPerOrder }) => {
      console.table([{ itemName, quantity, costPerOrder }]);
    });

    // - Log the total cost of the order to the console.
    //getting an error when trying console.table
    console.log(`Total: £${calculateOrderTotal(order).toFixed(2)}`);

}

createReceipt(order);

//I have the receipt in a table format it is not identical to the one in the example but it is a table format :)