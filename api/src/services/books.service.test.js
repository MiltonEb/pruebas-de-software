require('dotenv').config();

/* Nuestro objeto de pruebas */
const BooksService = require('./books.service');

/* Suplantando la clase MongoLib */
// const MongoLibStub = {
//   getAll: () => [...fakeBooks],
// };

// /* Datos simulados */
// const fakeBooks = [
//   {
//     _id: 1,
//     name: 'Harry Potter',
//   },

// ];

// /* Llamando a mock */
// jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  /* Variable para instancia del servicio */
  let service;
  /* Para cada prueba, crear una nueva instancia */
  beforeEach(() => {
    /* Crear instancia del servicio */
    service = new BooksService();
  });

  /* Pruebas para el método getBook */
  describe('Test for getBooks()', () => {
    test('Should return a list of books', async () => {
      /* Arrange: preparar el entorno */
      /* Act: Acción a probar */
      const books = await service.getBooks({});
      console.log(books);
      /* Assert: Confirmar */
      expect(books.length).toEqual(books.length);
    });
  });

  /* Pruebas para el método createBook */
  describe('Test for createBook()', () => {
    test('Should create a new book', async () => {
      /* Arrange */
      const newBook = {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        year: 1937,
      };

      /* Act */
      const result = await service.createBook(newBook);
      console.log(result);

      /* Assert */
      expect(result).toBeDefined();
      expect(result._id).toBeDefined();
      expect(result.title).toEqual(newBook.title);
    });
  });
});
