var Product = require("../model/product.js");

module.exports = new (class ProductService {
  //post
  addToProduct(data) {
    return Product.create(data);
  }
  delete(id) {
    return Product.findOneAndDelete({ _id: id });
  }
  getall() {
    return Product.find();
  }
  getProductBytitle(title) {
    return Product.find({ title: title });
  }
  getProductById(_id) {
    return Product.findOne({ _id: _id });
  }
  getProductByOwnerId(ownerId) {
    return Product.find({ ownerId: ownerId });
  }
  update(_id, data) {
    return Product.findOneAndUpdate({ _id: _id }, data);
  }
})();
