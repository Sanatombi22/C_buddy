// to make database connection

// mongodb+srv://tsuna16kin:YHUvwALCxr6sIw8V@cluster1.tiwpcnc.mongodb.net/

// mongodb+srv://tsuna16kin:YHUvwALCxr6sIw8V@cluster1.tiwpcnc.mongodb.net/

// mongodb+srv://tsuna16kin:<password>@cluster1.tiwpcnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1


const mongoose = require("mongoose");

const url =
// "mongodb+srv://tsuna16kin:6A4TKRj4nQ5iP35t@collegebuddydb.w2umm0i.mongodb.net/";
// "mongodb+srv://tsuna16kin:<password>@cluster1.tiwpcnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
"mongodb+srv://tsuna16kin:YHUvwALCxr6sIw8V@cluster1.tiwpcnc.mongodb.net/";

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
