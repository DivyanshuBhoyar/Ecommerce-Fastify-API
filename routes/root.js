"use strict";

const Product = require("../schema/Product");

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const { data, status } = await fastify.axios.get(
      "https://fakestoreapi.com/products?limit=6"
    );
    console.log(data);
    return { root: true, data, status };
  });
};
