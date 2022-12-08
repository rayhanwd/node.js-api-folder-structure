const { Book, Author } = require("./book.model");
const createcache = require("../../../utils/cache");

const createNewBook = async (data) => {
  let author = await Author.findOne({ name: data.authorName });
  if (!author) {
    author = new Author({ name: data.authorName, books: [] });
    await author.save();
  }
  const book = new Book({
    bookTitle: data.bookTitle,
    description: data.description,
    author: author,
  });
  author.books.push(book);
  await book.save();
  await author.save();
  return book;
};

const getAllBook = async () => {
  const myCache = createcache(100, 120);
  const cachedData = myCache.get("books");
  if (cachedData) {
    res.send(cachedData);
  } else {
    const books = await Book.find().populate("author");
    return books;
  }
  const books = await Book.find().populate("author");
  cache.set("books", books);
  return books;
};
module.exports = {
  createNewBook,
  getAllBook,
};
