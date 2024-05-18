// to make database connection

const mongoose = require("mongoose");

const url =

// mongodb connection add here
// example mongodb+srv://sdsgfdhfdg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1


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
