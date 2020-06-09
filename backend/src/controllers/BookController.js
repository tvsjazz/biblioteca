const mongoose = require('mongoose');
const multer = require('multer');

const Book = mongoose.model('Book');

module.exports = {
    async index(req, res) {
        // const { page = 1 } = req.query;
        // const books = await Book.paginate({}, { page, limit: 10 });
        const books = await Book.find();

        return res.json(books);
    },

    async show(req, res) {
        const book = await Book.findById(req.params.id);

        return res.json(book);
    },

    /* async store(req, res) {
        const files = req.files;
        console.log(files);
        res.json({ message: files });
    }, */

    async store(req, res) {
        // const { filename } = req.file;
        const { titulo, autor, paginas, descricao, nomeReserva = '', reservado = false, emprestado = false } = req.body;

        const book = await Book.create({
            titulo,
            autor,
            paginas,
            descricao,
            nomeReserva,
            reservado,
            emprestado,
            // capa: filename
        });

        return res.json(book);
    },

    async update(req, res) {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(book);
    },

    async destroy(req, res) {
        const book = await Book.findByIdAndRemove(req.params.id);

        return res.json(book);
    }
};