const booksServices = require("./book.services");

const createNewBook = async (req, res) => {
  try {
    const book = await booksServices.createNewBook(req.body);
    res.status(201).json({
      message: "Book hasbeen stored successfully!",
      book,
    });
  } catch {
    res.status(500).json("something went wrong");
  }
};

const getAllBook = async (_, res) => {
  try {
    const books = await booksServices.getAllBook();
    res.status(200).json({
      message: "Books are available",
      books,
    });
  } catch {
    res.status(500).json("something went wrong");
  }
};

module.exports = {
  createNewBook,
  getAllBook,
};
