const booksModel = require("../models/schema.js");


const createBook = async (req, res)=> {
  try {
    const {bookTitle, bookAuthor, bookPublication, bookGenre, bookCode, bookPrice} = req.body;
    const bookData = await booksModel.create({bookTitle, bookAuthor, bookPublication, bookGenre, bookCode, bookPrice });
    res.send("book created successfully",bookData);
  }
  catch (error) {
    res.send( "error ocuured", error );
  }
};


const getAllBooks = async (req, res)=> {
  try {
    const bookData = await booksModel.find();
    res.send("book fetched successfully",bookData);
  } catch (error) {
    res.send( "error ocuured", error );
  }
};


const getBookById = async (req, res)=> {
    const { id } = req.params;
  try {
    const bookData = await booksModel.findById(id);
    res.send("book fetched successfully",bookData);
  } catch (error) {
    res.send( "error ocuured", error );
  }
};


const updateBookById = async (req, res)=> {
    const { id } = req.params;
    const { bookTitle, bookAuthor, bookPublication, bookGenre, bookCode, bookPrice } = req.body;
  try {
    let updatedBook = await booksModel.findByIdAndUpdate(id,{bookTitle, bookAuthor, bookPublication, bookGenre, bookCode, bookPrice });
    res.send("book is updated", updatedBook);
    }
  catch (error) {
    res.send("error ocuured", error );
  }
};


const deleteBookById = async (req, res)=> {
    const { id } = req.params;
  try {
    const deleteBook = await booksModel.findByIdAndDelete(id);
    res.send("book deleted successfully",bookData);
  } catch (error) {
    res.send("error ocuured", error );
  }
};
module.exports = {createBook, getAllBooks, getBookById, updateBookById, deleteBookById };

