const ProductModel = require("../models/Product");

class SearchController {
  search(req, res) {
    const { name } = req.query;

    ProductModel.find({})
      .then((result) => {
        const filter = [];

        result.map((item) => {
          if (item.name.toLowerCase().includes(name.toLowerCase())) {
            filter.push(item);
          }
        });
        res.send(filter);
      })
      .catch((err) => res.send(err));
  }
}

module.exports = new SearchController();
