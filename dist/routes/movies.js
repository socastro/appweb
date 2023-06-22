"use strict";

var _movies = _interopRequireDefault(require("../actions/movies"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.getAllMovies = ctx => {
  ctx.body = _movies.default.getMovies();
  return ctx;
};
exports.createMovie = ctx => {
  _movies.default.addMovie(ctx.request.body);
  ctx.body = {
    message: 'Pelicula creada correctamente'
  };
  return ctx;
};
exports.removeMovie = ctx => {
  _movies.default.removeMovie(ctx.params.id);
  ctx.body = {
    message: 'Pelicula eliminada correctamente'
  };
  return ctx;
};
exports.editMovie = ctx => {
  _movies.default.editMovie(ctx.request.body);
  ctx.body = {
    message: 'Pelicula editada correctamente'
  };
  return ctx;
};