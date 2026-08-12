function sales(carsSold) {
  return carsSold.reduce(function (totals, { make, price }) {
    totals[make] = (totals[make] || 0) + price;
    return totals;
  }, {});
}

module.exports = sales;
