import Router from 'koa-router'
import users from './user'
import movies from './movies'
import getHealth from './health'
const router = new Router()

router.get('/health', getHealth)

router.get('/api/users', users.getAllUsers)
router.put('/api/user', users.createUser)
router.delete('/api/user/:rut', users.removeUser)

router.get('/api/movies', movies.getAllMovies)
//router.post('/api/movies', movies.createMovie)
//router.put('/api/movies', movies.editMovie)
router.delete('/api/movies/:id', movies.removeMovie)

/*router.get('/api/movies', ctx => {
    ctx.body = movies;
  });
  
  // Agregar una nueva película
  router.post('/api/movies', ctx => {
    const { name, date, cast} = ctx.request.body;
    const newMovie = { id: movies.length + 1, name, date, cast };
    movies.push(newMovie);
    ctx.status = 201;
    ctx.body = newMovie;
  });
  
  // Eliminar una película
  router.del('/api/movies/:id', ctx => {
    const movieId = parseInt(ctx.params.id);
    movies = movies.filter(movie => movie.id !== movieId);
    ctx.body = { message: 'Película eliminada correctamente' };
  });
  
  // Editar los atributos de una película
  router.put('/api/movies/:id', ctx => {
    const movieId = parseInt(ctx.params.id);
    const { name, date, cast} = ctx.request.body;
    const movie = movies.find(movie => movie.id === movieId);
    if (!movie) {
      ctx.status = 404;
      ctx.body = { message: 'Película no encontrada' };
      return;
    }
    movie.name = name || movie.name;
    movie.date = date || movie.date;
    movie.cast = cast || movie.cast;
    ctx.body = movie;
  });*/
  

export default router