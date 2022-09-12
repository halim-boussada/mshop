const ShopOwnerService = require("../service/shopOwnerService.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async getShopOwner(req, res, next) {
    try {
      var ShopOwner = await ShopOwnerService.getAllShopOwner();
      res.send(ShopOwner);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async getShopOwnerById(req, res, next) {
    try {
      var ShopOwner = await ShopOwnerService.getShopOwnerById(req.params.id);
      res.send(ShopOwner);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async deleteByParams(req, res, next) {
    try {
      var ShopOwner = await ShopOwnerService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.send("error deleting_params");
    }
  },
  async updated(req, res, next) {
    try {
      var ShopOwner = await ShopOwnerService.update(req.params.id, req.body);
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async updatedPassword(req, res, next) {
    try {
      var ShopOwner = await ShopOwnerService.updatePassword(
        req.params.id,
        req.body.password
      );
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
