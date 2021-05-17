const CartModel = require("../models/Cart");

class CartController {
  // [GET] /cart/:id
  getCart(req, res) {
    const { id } = req.params;

    CartModel.findOne({ userId: id })
      .then((cart) => res.send(cart.productList))
      .catch((err) => res.send("lỗi"));
  }
  // [POST] /cart/update
  async updateCart(req, res) {
    const { id, cart } = req.body;

    const user = await CartModel.find({ userId: id });
    if (!user) return res.status(400).send("User doesnt exist");

    CartModel.findOneAndUpdate({ userId: id }, { productList: cart })
      .then(() => res.send("updated"))
      .catch(() => res.send("cannot update"));
  }
}

module.exports = new CartController();
