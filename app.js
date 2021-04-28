"use strict";

const path = require("path");
const AutoLoad = require("fastify-autoload");
const mongoose = require("mongoose");
const Product = require("./schema/Product");
mongoose
  .connect(
    "mongodb+srv://hatwaarbeta:mongo7038@devcluster0.hdvnq.mongodb.net/ecommerce?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Mongo Atlas online"))
  .catch((err) => console.log(error));

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  fastify.register(require("fastify-axios"));

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};
