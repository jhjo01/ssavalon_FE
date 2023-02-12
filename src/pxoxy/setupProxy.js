const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://i8b305.p.ssafy.io:8000",
      changeOrigin: true,
    })
  );
};
