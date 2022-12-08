const { mongoose } = require("../../../libs/libs");

const bookSchema = new mongoose.Schema({
  bookTitle: String,
  description: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});
const authorSchema = new mongoose.Schema({
  name: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

const Author = mongoose.model("Author", authorSchema);
const Book = mongoose.model("Book", bookSchema);

module.exports = {
  Book,
  Author,
};
