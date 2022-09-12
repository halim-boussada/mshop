const OrderService = require("../service/orderServices.js");

module.exports = {
  async postOrder(req, res, next) {
    try {
      var Order = await OrderService.addToOrder(req.body);
      res.send(Order);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async get(req, res, next) {
    try {
      var Order = await OrderService.getall();

      res.send(Order);
    } catch (next) {
      res.status(401).json({ msg: "somthing wrong" });
    }
  },
  async delet(req, res, next) {
    try {
      var Order = await OrderService.delete(req.params.id);
      res.send(Order);
    } catch (next) {
      res.status(401).json({ msg: "somthing wrong" });
    }
  },
  async update(req, res, next) {
    try {
      var Order = await OrderService.update(req.params.id, req.body);
      res.send(Order);
    } catch (next) {
      res.status(401).json({ msg: "somthing wrong" });
    }
  },
};
