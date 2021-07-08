const User = require("../models/User");
const factory = require("./handlerFactory");

exports.getAll = factory.getAll(User);
