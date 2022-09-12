const adminService = require("../service/adminService.js");
const paimentService = require("../service/paiment.js");
const coachService = require("../service/coachService.js");
const transactionService = require("../service/transactionService.js");

module.exports = {
  async getadmin(req, res, next) {
    try {
      var admin = await adminService.getAllAdmin();
      res.send(admin);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async getpaiments(req, res, next) {
    try {
      var p = await paimentService.getAllPaiment().populate("coachId");
      res.send(p);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async confirmPaiment(req, res, next) {
    try {
      var tr = await paimentService.findById(req.params._id);
      var p = await paimentService.approve(req.params._id);

      var transaction = await transactionService.create({
        from: "Carriery",
        to: tr.coachId,
        amount: tr.commetion,
        method: "withdrow",
      });
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async deleteByParams(req, res, next) {
    try {
      var admin = await adminService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async updatedPassword(req, res, next) {
    try {
      var admin = await adminService.updatePassword(
        req.params.id,
        req.body.password
      );
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
