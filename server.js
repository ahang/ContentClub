//Server Dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");

const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

//Articles
//const [NAME] = require("./models/[name]")

const app = express();
const PORT = process.env.PORT || 3000;

//logging and setting up bodyparser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Passport
app.use(require("express-session")({
	secret: "keyboardy cat",
	resave: false,
	saveUnitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

//Passport Config
const Account = require("./models/account");
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//using static public folder
app.use(express.static("./public"));

//Mongoose - Commented for now
// const databaseString = process.env.MONGODB_URI || "mongodb://localhost/ContentClub";

// mongoose.Promise = Promise;
// mongoose.connect(databaseString);
// const db = mongoose.connection;

// db.on("error", function(err) {
// 	console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
// 	console.log("Mongoose connection successful.");
// });

//Importing Routes
const auth = require("./controllers/authentication.js");

app.use("/", auth);


app.listen(PORT, function() {
	console.log(`Server Running on Port: ${PORT}`);
});