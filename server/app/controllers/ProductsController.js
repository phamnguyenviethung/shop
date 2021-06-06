const ProductModel = require("../models/Product");

class ProductsController {
  // [GET] /products/list
  list(req, res, next) {
    ProductModel.find({})
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  }

  // [GET] /products/:id
  getByID(req, res) {
    const { id } = req.params;
    ProductModel.findOne({ _id: id })
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  }

  // [GET] /products/:slug
  getBySlug(req, res) {
    const { slug } = req.params;

    ProductModel.findOne({ slug })
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  }

  // [POST] /products/add
  add(req, res) {
    const {
      name,
      price,
      quantity,
      thumb,
      desc,
      discount,
      categories,
      size,
      color,
    } = req.body;

    const product = new ProductModel({
      name,
      price,
      size,
      quantity,
      thumb,
      desc,
      discount,
      categories,
      color,
    });
    product
      .save()
      .then((rs) => res.send(rs))
      .catch((err) => res.send(err));
  }

  // [PUT] /products/edit
  edit(req, res, next) {
    const newName = req.body.newProductName;
    const newPrice = req.body.newProductPrice;
    const newQuantity = req.body.newProductQuantity;
    const newImg = req.body.newProductImg;
    const id = req.body.id;

    ProductModel.findById(id, (err, updatedProduct) => {
      updatedProduct.name = newName;
      updatedProduct.price = newPrice;
      updatedProduct.quantity = newQuantity;
      updatedProduct.thumb = newImg;
      updatedProduct.save();
    })
      .then(() => res.send("updated"))
      .catch(() => res.send("cannot update"));
  }

  // [DELETE] /products/delete/:id
  delete(req, res) {
    const id = req.params.id;

    ProductModel.deleteOne({ _id: id })
      .then(res.send("deleted"))
      .catch(res.send("cannot delete"));
  }
}

module.exports = new ProductsController();
