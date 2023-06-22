"use strict";

let movies = [];
exports.getMovies = () => {
  return movies;
};
exports.addMovie = movieData => {
  const movie = {
    name: movieData.name,
    date: movieData.id,
    cast: movieData.cast,
    id: movieData.id
  };
  movies.push(movie);
};
exports.removeMovie = movieId => {
  movies = movies.filter(movie => {
    return movie.id !== movieId;
  });
};
exports.editMovie = movieData => {
  const movieId = parseInt(movieData.id);
  const {
    name,
    date,
    cast,
    id
  } = req.body;
  const movie = movies.find(movie => movie.id === movieId);
  if (!movie) {
    return res.status(404).json({
      message: 'Película no encontrada'
    });
  }
  movie.name = name || movie.name;
  movie.date = date || movie.date;
  movie.cast = cast || movie.cast;
  res.status(200).json(movie);
};