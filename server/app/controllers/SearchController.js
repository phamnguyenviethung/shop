const ProductModel = require("../models/Product");
const isEmpty = require("../../util/isObjEmpty");

class SearchController {
  search(req, res) {
    // if (isEmpty(req.query)) {
    //   ProductModel.find({})
    //     .then((rs) => res.send(rs))
    //     .catch((err) => console.log(err));
    // }

    // Query
    const { name, price, size, color } = req.query;

    //  Query convert
    const text = name
      ? name
          .trim()
          .toLowerCase()
          .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))
      : "";

    const priceRange = price ? price.map((i) => i * 100) : [0, 9e9];

    // Query assignment

    const query = {};
    const queryAssign = (q, key = q, value = q) => {
      if (q) {
        Object.assign(query, {
          [key]: value,
        });
      }
    };
    queryAssign(price, "price", { $gt: priceRange[0], $lt: priceRange[1] });
    queryAssign(size, "size", { $in: size });
    queryAssign(color, "color", { $in: color });

    // Find

    ProductModel.find({
      $and: [{ ...query }, { name: { $regex: text } }],
    })
      .then((rs) => {
        res.send(rs);
      })
      .catch((err) => res.send(err));
  }
}

module.exports = new SearchController();
