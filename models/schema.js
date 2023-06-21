const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(
  {
    booktitle: {
        type: String,
        unique: true,
        required: true
    },
    bookauthor: {
        type: String,
        required: true,
    },
    bookpublication: {
        type: String,
        required: true,
    },
    bookgenre: {
        type: String,
        required: true
    },
    bookcode: {
        type: String,
        required: true,
    },
    bookprice:{
        type: String,
        required: true
    }
  }
);
const bookModel = mongoose.model('bookModel', bookSchema, 'bookModels')
module.exports = bookModel;                       