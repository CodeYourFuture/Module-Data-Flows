function sales(carsSold) {
  return carsSold.reduce((acc, car) => {
    acc[car.make] = (acc[car.make] || 0) + car.price;
    return acc;
  }, {});
}

module.exports = sales;
