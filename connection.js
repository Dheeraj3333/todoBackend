const mongoose = require("mongoose");

async function connectToDB(url) {
  await mongoose
    .connect(url)
    .then(() => {
      console.log("connected to Database");
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = {
    connectToDB,
}
