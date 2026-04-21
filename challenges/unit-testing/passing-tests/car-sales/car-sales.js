function sales(carsSold) {
  let totals = {};

  for (let car of carsSold) {
    if (totals[car.make]) {
      totals[car.make] += car.price;
    } else {
      totals[car.make] = car.price;
    }
  }

  return totals;
}

module.exports = sales;
