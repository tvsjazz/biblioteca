const express = require('express');
const routes = express.Router();
const multer = require('multer');
const uploadConfig = require('./config/upload.js');
const uploadMiddleware = multer(uploadConfig);
// const multipart = require('connect-multiparty');

// const multipartMiddleware = multipart({ uploadDir: '../backend/temp/uploads' });

const BookController = require('./controllers/BookController');

routes.get('/acervo', BookController.index);
routes.get('/acervo/:id', BookController.show);
routes.post('/acervo', uploadMiddleware.single('capa'), BookController.store);
// routes.post('/acervo', multipartMiddleware, BookController.store);
routes.put('/reservar/:id', BookController.update);
routes.delete('/acervo/:id', BookController.destroy);

module.exports = routes;