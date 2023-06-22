"use strict";

var _koa = _interopRequireDefault(require("koa"));
var _koaBody = _interopRequireDefault(require("koa-body"));
var _router = _interopRequireDefault(require("./routes/router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const appkoa = new _koa.default();
const port = 3000;
appkoa.use((0, _koaBody.default)({
  multipart: true,
  urlencoded: true
}));
appkoa.use(_router.default.routes());
const app = appkoa.listen(3000, function () {
  console.log("Server is running on port 3000");
});
module.exports = app;

//export default app