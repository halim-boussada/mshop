var ShopOwner = require("../model/shopOwner.js");

module.exports = new (class ShopOwnerService {
  signup(data) {
    return ShopOwner.create(data);
  }
  getShopOwnerById(id) {
    return ShopOwner.findOne({ _id: id });
  }
  getShopOwnerByEmail(email) {
    return ShopOwner.findOne({ email: email });
  }
  getAllShopOwner() {
    return ShopOwner.find();
  }
  delete(id) {
    return ShopOwner.findOneAndDelete({ _id: id });
  }
  update(_id, data) {
    return ShopOwner.findOneAndUpdate({ _id: _id }, data);
  }

  updatePassword(_id, newpassword) {
    return ShopOwner.findOneAndUpdate({ _id: _id }, { password: newpassword });
  }
})();
