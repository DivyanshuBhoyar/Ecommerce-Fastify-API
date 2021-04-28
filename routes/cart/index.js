"use strict";

const Cart = require("../../schema/Cart");

module.exports = async function (fastify, opts) {
  fastify.get("/:id", async function (request, reply) {
    const cart = Cart.find({
      userid: request.params.id,
    });
    return { root: false, data: cart, status: 200 };
  });
};
