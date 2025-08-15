let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printOrder(order) {
  let maxNumberLength = findLongestQuantityNumberLength(order);
  if (maxNumberLength < 3) {
    // length of 'QTY' word is 3
    maxNumberLength = 3;
  }
  let maxNameLength = findLongestItemNameLength(order);
  if (maxNameLength < 4) {
    // length of 'ITEM' word is 3
    maxNameLength = 4;
  }
  console.log("QTY" + " ".repeat(4) + "ITEM" + " ".repeat(maxNameLength) + "TOTAL");
  for (let i = 0; i < order.length; i++) {
    const { itemName, quantity, unitPricePence } = order[i];
    console.log(quantity + " ".repeat(maxNumberLength - numberDigitsQuantity(quantity) + 4) + itemName + " ".repeat(maxNameLength - itemName.length + 4) + convertPenceToPounds(unitPricePence));
  }
}

// number of digits can be calculated from logarithm with base 10
function numberDigitsQuantity(number) {
  const logarithm = Math.log10(number);
  const digitsQuantity = Math.floor(logarithm) + 1;
  return digitsQuantity;
}

function findLongestQuantityNumberLength(order) {
  let max = 0;
  for (let i = 0; i < order.length; i++) {
    const { itemName, quantity } = order[i];
    const numberLength = numberDigitsQuantity(quantity)
    if (numberLength > max) {
      max = numberLength;
    }
  }
  return max;
}

function findLongestItemNameLength(order) {
  let max = 0;
  for (let i = 0; i < order.length; i++) {
    const { itemName, quantity } = order[i];
    const numberLength = numberDigitsQuantity(quantity)
    if (itemName.length > max) {
      max = itemName.length;
    }
  }
  return max;
}

function convertPenceToPounds(pence) {
  const penceString = String(pence);
  const pounds = penceString.substring(
    0,
    penceString.length - 2
  );
  const remainingPence = penceString
    .substring(penceString.length - 2);

  return `${pounds.padStart(1, "0")}.${remainingPence}`;
}

printOrder(order);