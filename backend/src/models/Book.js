const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');

const BookSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    paginas: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    nomeReserva: {
        type: String
    },
    reservado: {
        type: Boolean
    },
    emprestado: {
        type: Boolean
    },
    /* capa: {
        type: String,
        required: true
    }, */
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// BookSchema.plugin(mongoosePaginate);

mongoose.model('Book', BookSchema);