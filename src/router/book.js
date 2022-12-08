const { router } = require("../libs/libs");
const booksControllers = require("../api/v1/book/book.controller");

router
  .post("/", booksControllers.createNewBook)
  .get("/", booksControllers.getAllBook);

module.exports = router;
