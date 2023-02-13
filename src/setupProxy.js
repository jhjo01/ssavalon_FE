const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  //   app.use(
  //     createProxyMiddleware("/naver", {
  //       target: "https://search.naver.com",
  //       pathRewrite: {
  //         "^/naver": "",
  //       },
  //       changeOrigin: true,
  //     })
  //   );
  //   app.use(
  //     createProxyMiddleware("/api8000", {
  //       target: "https://i8b305.p.ssafy.io",
  //       pathRewrite: {
  //         "^/api8000": "",
  //       },
  //       changeOrigin: true,
  //     })
  //   );
};
