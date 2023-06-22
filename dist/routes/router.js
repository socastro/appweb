"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _koaRouter = _interopRequireDefault(require("koa-router"));
var _user = _interopRequireDefault(require("./user"));
var _movies = _interopRequireDefault(require("./movies"));
var _health = _interopRequireDefault(require("./health"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = new _koaRouter.default();
router.get('/health', _health.default);
router.get('/api/users', _user.default.getAllUsers);
router.put('/api/user', _user.default.createUser);
router.delete('/api/user/:rol', _user.default.removeUser);
router.get('/api/movies', _movies.default.getAllMovies);
router.put('/api/movies', _movies.default.createMovie);
router.delete('/api/movies/:id', _movies.default.removeMovie);
var _default = router;
exports.default = _default;