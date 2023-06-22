"use strict";

var _supertest = _interopRequireDefault(require("supertest"));
var _indexapp = _interopRequireDefault(require("../indexapp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Importar las dependencias necesarias

//import sinon from 'sinon'
//import userActions from '../../../src/actions/user/user'
describe('Testeo de la API de Peliculas', () => {
  it('Debería obtener todas las peliculas', async () => {
    const res = await (0, _supertest.default)(_indexapp.default).get('/api/movies');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
  });
  it('Debería agregar una nueva pelicula', async () => {
    const res = await (0, _supertest.default)(_indexapp.default).post('/api/movies').send({
      name: 'Qué paso ayer?',
      date: "20/06/2023",
      cast: ['cristiano.ronaldo@gmail.com', 'alexis.sanchez@gmail.com', 'sofia.castro@gmail.com'],
      id: 1
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual('Qué paso ayer?');
  });
  it('Debería eliminar un pelicula existente', async () => {
    const res = await (0, _supertest.default)(_indexapp.default).delete('/api/movies/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Pelicula eliminada correctamente');
  });
  it('Debería editar los atributos de un pelicula existente', async () => {
    const res = await (0, _supertest.default)(_indexapp.default).put('api/movies/2').send({
      name: 'Bob Esponja',
      date: "22/06/2023",
      cast: ["ibai@gmail.com", "jorge.zabaleta@gmail.com"]
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('Pulp Fiction');
    expect(res.body.date).toEqual(30062023);
    expect(res.body.cast).toBe("Angelina Jolie");
  });
});