const express = require("express");
const route = express.Router();
const bookRouter = require("../controllers/booksModel");

route.post("/book",bookRouter.createBook);
route.get("/book",bookRouter.getAllBooks);
route.get("/book/:id",bookRouter.getBookById);
route.put("/book/:id",bookRouter.updateBookById);
route.delete("/book/:id",bookRouter.deleteBookById);

module.exports = route;


// ---------------------------another way with destructring:---------------------------------
// const express = require("express");
// const route = express.Router();
// const {createBook, getAllBooks, getBookById, updateBookById, deleteBookById} = require("../controllers/booksModel");

// route.post("/book",createBook);
// route.get("/book",getAllBooks);
// route.get("/book/:id",getBookById);
// route.put("/book/:id",updateBookById);
// route.delete("/book/:id",deleteBookById);

// module.exports = route;