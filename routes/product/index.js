"use strict";
const Product = require("../../schema/Product");

module.exports = async function (fastify, opts) {
  fastify.get("/:pid", async function (request, reply) {
    console.log(request.params.pid);
    const found_product = await Product.find({
      id: request.params.pid,
    });
    if (found_product == null) return fastify.httpErrors.notFound("Not found");
    return { data: found_product, status: 200, root: false };
  });
};
