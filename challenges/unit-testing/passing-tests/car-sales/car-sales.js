
function sales(carsSold) {
  const totals = {};

  for (const car of carsSold) {
    const make = car.make;
    const price = car.price;

    if (!totals[make]) {
      totals[make] = 0;
    }

    totals[make] += price;
  }

  return totals; 
}

module.exports = sales;

