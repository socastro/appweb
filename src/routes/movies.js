import movieActions from '../actions/movies'

exports.getAllMovies = (ctx) => {
    ctx.body = movieActions.getMovies()
    return ctx
}

exports.createMovie = (ctx) => {
    movieActions.addMovie(ctx.request.body)
    ctx.body = { message: 'Pelicula creada correctamente' }
    return ctx
}

exports.removeMovie = (ctx) => {
    movieActions.removeMovie(ctx.params.id)
    ctx.body = { message: 'Pelicula eliminada correctamente' }
    return ctx
}

/*exports.editMovie = (ctx) => {
    if(movieActions.editMovie(ctx.request.body)){
        ctx.status = 200
        ctx.body = { message: 'Pelicula editada correctamente' }
    }
    else{
        ctx.status = 400
        ctx.body = { message: 'Pelicula no encontrada' }
    }
    return ctx;
  }

  */