const fastify = require("fastify")({ logger: true });

fastify.register(require("fastify-cors"), {
  origin: true,
});

fastify.route({
  method: "POST",
  url: "/auth",
  handler: async (req, res) => {
    res.send({
      success: true,
      message: {
        email:
          req.body.data.email == "kevin@gmail.com"
            ? "AUTH_EMAIL_OK"
            : "AUTH_EMAIL_FAILED",
        password:
          req.body.data.password == "12345"
            ? "AUTH_PASSWORD_OK"
            : "AUTH_PASSWORD_FAILED",
      },
    });
  },
});

fastify.get("/", (req, res) => {
  res.send({ hello: "world" });
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "127.0.0.1" });
  } catch (error) {
    fastify.log.error(error);
  }
};

start();
