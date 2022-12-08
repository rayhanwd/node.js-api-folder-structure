const { mongoose } = require("../libs/libs");

let initMongo = async () => {
  try {
    await mongoose.connect(process.env.DBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected!");
  } catch (e) {
    console.log("Database error!", e.message);
  }
};

initMongo();
