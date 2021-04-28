"use strict";
const Products = require("../../schema/Product");

const allowed_categories = ["chairs", "tables", "sofas"];
module.exports = async function (fastify, opts) {
  fastify.get("/:cat", async function (request, reply) {
    let required_products;
    if (!allowed_categories.includes(request.params.cat))
      return fastify.httpErrors.notFound("Page not found");
    try {
      required_products = await Products.find({
        category: request.params.cat,
      });
    } catch (error) {
      console.log(errors);
      return fastify.httpErrors.notFound("Not found");
    }
    return required_products;
  });
};
