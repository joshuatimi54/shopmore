const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const storeRoutes = require("./routes/storeRoutes");
require("dotenv").config();

// express app
const app = express();

// connect to mongodb
mongoose.set("strictQuery", false);

const dbURI = process.env.URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(4000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
// app.use("/quests", questRoutes);
// app.use("/users", userRoutes);
app.use("/", storeRoutes); 


//404 page
//app.use((req, res) => {
  //res.status(404).render("404", { title: "404" });
// });
