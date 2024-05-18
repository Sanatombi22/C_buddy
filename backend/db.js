// to make database connection

const mongoose = require("mongoose");

const url =
// add mongodb connection here
// eg - "mongodb+srv://sdgfhdhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";


module.exports.connect = () => {
  mongoose
    .connect(url, {
      //  useNewUrlParser: true,
      //  useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
