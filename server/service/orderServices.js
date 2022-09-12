var Order = require("../model/order.js");

module.exports = new (class OrderService {
  //post
  addToOrder(data) {
    return Order.create(data);
  }
  delete(id) {
    return Order.findOneAndDelete({ _id: id });
  }
  getall() {
    return Order.find();
  }
  update(_id, data) {
    return Order.findOneAndUpdate({ _id: _id }, data);
  }
})();
