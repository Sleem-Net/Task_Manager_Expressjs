const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    // solution to the deprecation errors
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
