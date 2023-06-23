const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(
  {
    bookTitle: {
        type: String,
        unique: true,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true,
    },
    bookPublication: {
        type: String,
        required: true,
    },
    bookGenre: {
        type: String,
        // required: trues
    },
    bookCode: {
        type: String,
        //  required: true,
    },
    bookPrice:{
        type: String,
        // required: true
    }
  }
);
const booksModel = mongoose.model('bookModel', bookSchema, 'bookModels')
module.exports = booksModel;







                      