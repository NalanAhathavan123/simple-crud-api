const express = require("express");
const mongoose = require("mongoose");
const ProductRoute = require("./routes/product.route");
const port = 3000;
const app = express();
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://nalanahathavanag21:IWj2txPQc2sWBSIe@cluster0.glo0faj.mongodb.net/Node-api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database is connected...");
  })
  .catch((error) => {
    console.log("Database failed to connect...");
    console.log(`Error:${error.message}`);
  });

app.get("/", (req, res) => {
  res.send("Hello from backend...");
});

app.use("/api/products",ProductRoute);
app.listen(port, () => {
  console.log(`server is running in ${port} successfully..`);
});
