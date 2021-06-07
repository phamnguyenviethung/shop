const CartModel = require("../models/Cart");

class CartController {
  // [GET] /cart/:id
  getCart(req, res) {
    const { id } = req.params;

    CartModel.findOne({ userId: id })
      .then((cart) => res.send(cart.productList))
      .catch((err) => res.send(err));
  }
  // [POST] /cart/update
  async updateCart(req, res) {
    const { id, cart } = req.body;

    const user = await CartModel.find({ userId: id });
    if (!user) return res.status(400).send("User doesnt exist");

    CartModel.findOneAndUpdate(
      { _id: user[0].id },
      { productList: cart },

      (err) => {
        if (err) {
          console.log(err);
        }
      }
    )
      .then((cart) => res.send(cart.productList))
      .catch(() => res.send("cannot update"));
  }
}

module.exports = new CartController();
