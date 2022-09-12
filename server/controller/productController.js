const ProductService = require("../service/productServices.js");

module.exports = {
  async postProduct(req, res, next) {
    try {
      var Product = await ProductService.addToProduct(req.body);
      res.send(Product);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async getProductBytitle(req, res, next) {
    try {
      console.log("here");
      var Product = await ProductService.getProductBytitle(
        req.params.title
      ).populate("ownerId");
      res.send(Product);
    } catch (next) {
      res.status(401).json({ msg: "somthing wrong" });
    }
  },
  async getProductById(req, res, next) {
    try {
      console.log("here");
      var Product = await ProductService.getProductById(req.params.id).populate(
        "ownerId"
      );
      res.send(Product);
    } catch (next) {
      res.status(404).json({ msg: false });
    }
  },

  async getProductByownerId(req, res, next) {
    try {
      console.log("here");
      var Product = await ProductService.getProductByownerId(
        req.params.ownerId
      ).populate("ownerId");
      res.send(Product);
    } catch (next) {
      res.status(401).json({ msg: "somthing wrong" });
    }
  },

  async get(req, res, next) {
    try {
      var Product = await ProductService.getall().populate("ownerId");
      res.send(Product);
    } catch (next) {
      res.status(401).json({ msg: "somthing wrong" });
    }
  },
  async delet(req, res, next) {
    try {
      var Product = await ProductService.delete(req.params.id);
      res.send(Product);
    } catch (next) {
      res.status(401).json({ msg: "somthing wrong" });
    }
  },
  async update(req, res, next) {
    try {
      var Product = await ProductService.update(req.params.id, req.body);
      res.send(Product);
    } catch (next) {
      res.status(401).json({ msg: "somthing wrong" });
    }
  },
};
