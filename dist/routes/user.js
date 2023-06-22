"use strict";

var _user = _interopRequireDefault(require("../actions/user"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.getAllUsers = ctx => {
  ctx.body = _user.default.getUsers();
  return ctx;
};
exports.createUser = ctx => {
  _user.default.addUser(ctx.request.body);
  ctx.body = {
    message: 'User was created'
  };
  return ctx;
};
exports.removeUser = ctx => {
  _user.default.removeUser(ctx.params.rol);
  ctx.body = {
    message: 'User was removed'
  };
  return ctx;
};