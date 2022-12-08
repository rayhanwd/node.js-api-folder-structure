const { express, dotenv } = require("./libs/libs.js");
var app = express();
dotenv.config();
require("./db/db.js");
const { book, user } = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route configaration
app.use("/api/book", book);
// app.use("/api/user", user);

// Listen on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
