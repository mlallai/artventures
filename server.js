const express = require("express");
const mongoose = require("mongoose");
// LOAD BODY PARSER
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const posters = require("./routes/api/posters");
const orders = require("./routes/api/orders");

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB CONFIG

const db = require("./config/keys").mongoURI;

//CONNECT TO MONGO DB WITH MONGOOSE

mongoose
  .connect(db)
  //PROMISE RETURN
  .then(() => console.log("MongoDB Connected !"))
  .catch(err => console.log(err));

// PAGE D'ACCUEIL
// app.get('/', (req, res) => res.send('Hello Baby'));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

//USE ROUTES
app.use("/api/users", users);
app.use("/api/posters", posters);
app.use("/api/orders", orders);

// ON TOURNE SUR ENVIRONNEMENT DE PROD OU SUR PORT 5000 EN LOCAL
const port = process.env.PORT || 5000;

// ON DIT OU LANCER LE SERVEUR
app.listen(port, () => console.log(`Server running on port ${port}`));
