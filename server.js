const express = require("express");
const routes = require("./routes");
const app = express();
const session = require("express-session");

//Koristenje EJS i views folder
app.set("view engine", "ejs");

//Preuzimanje podataka iz POST metode
app.use(express.urlencoded({ extended: false }));

//za AJAX
app.use(express.json());

//Session
app.use(
  session({
    name: "sid",
    resave: false,
    saveUninitialized: false,
    secret: "fullapp",
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      sameSite: true,
      secure: false,
    },
  })
);

//Koristenje css, js iz public foldera
app.use(express.static(__dirname + "/public"));

//Rutiranje
app.use("/", routes);

app.listen(3000, () => {
  console.log("Radi...");
});
