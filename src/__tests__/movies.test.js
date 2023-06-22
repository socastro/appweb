// Importar las dependencias necesarias
import request from 'supertest';
import { server, app } from '../routes/index'
import sinon from 'sinon';
import movieActions from '../actions/movies'

describe('Testeo de la API de Peliculas', () => {
  beforeEach(() => {
    movieActions.addMovie(getMockMovie1())  
    movieActions.addMovie(getMockMovie2())  
    sinon.restore()  
  })

  afterAll(() => {
      server.close()
  })

  afterEach(() => {
      movieActions.clearMovies()
  })

  it('Debería obtener todas las peliculas', async () => {
    const res = await request(app.callback()).get('/api/movies');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
  });

  it('Debería agregar una nueva pelicula', async () => {
    const res = await request(app.callback()).post('/api/movies').send(getMockMovie1());
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual("Qué paso ayer?");
  });

  it('Debería eliminar un pelicula existente', async () => {
    const res = await request(app.callback()).delete('/api/movies/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Pelicula eliminada correctamente');
  });

  /*it('Debería editar los atributos de un pelicula existente', async () => {
    const res = await request(app.callback()).put('/api/movies/2').send({
      name: 'Bob Esponja',
      date: "22/06/2023",
      cast: ["ibai@gmail.com", "jorge.zabaleta@gmail.com"], 
      id:1
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('Pulp Fiction');
    expect(res.body.date).toEqual(30062023);
    expect(res.body.cast).toBe("Angelina Jolie");
  });*/
});


describe('GET /api/movies', () => {
    beforeEach(() => {
      movieActions.addMovie(getMockMovie1())  
      movieActions.addMovie(getMockMovie2())  
      sinon.restore()  
    })

    afterAll(() => {
        server.close()
    })

    afterEach(() => {
        movieActions.clearMovies()
    })

    test('should responds ok with the user list', async () => {
        sinon.stub(movieActions, 'getMovies').returns(getMockMovies())
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovies())
    })
})

function getMockMovie1 () {
    return{
        name: "Qué paso ayer?",
        date: "20/06/2023",
        cast: ["cristiano.ronaldo@gmail.com", "alexis.sanchez@gmail.com", "sofia.castro@gmail.com"],
        id:1
    }
    
}
function getMockMovie2 () {
  return{
      name: "Qué paso ayer2?",
      date: "20/06/2020",
      cast: ['felipe.camiroaga@gmail.com', 'alexis.bigotes@gmail.com'],
      id:2
  }
}


function getMockMovies (){
  return [
    {
      name: "Qué paso ayer?",
      date: "20/06/2023",
      cast: ['cristiano.ronaldo@gmail.com', 'alexis.sanchez@gmail.com', 'sofia.castro@gmail.com'],
      id: 1
    },
    {
      name: "Qué paso ayer2?",
      date: "20/06/2020",
      cast: ['felipe.camiroaga@gmail.com', 'alexis.bigotes@gmail.com'],
      id:2
    }
  ]
}
