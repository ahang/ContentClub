//Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


const app = express();
const PORT = process.env.PORT || 3000;

//logging and setting up bodyparser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "*/*" }));

//Passport
const localSignupStrategy = require("./server/passport/local-signup");
const localSigninStrategy = require("./server/passport/local-login");
passport.use("local-signup", localSignupStrategy);
passport.user("local-login", localSigninStrategy);

//Passport Config
const Account = require("./server/models/account");
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//using static public folder
app.use(express.static("./public"));


//Mongoose - Commented for now
const databaseString = process.env.MONGODB_URI || "mongodb://localhost/ContentClub";

mongoose.Promise = Promise;
mongoose.connect(databaseString);
const db = mongoose.connection;

db.on("error", function(err) {
	console.log("Mongoose Error: ", err);
});

db.once("open", function() {
	console.log("Mongoose connection successful.");
});

//Importing Routes
const authRoutes = require("./server/controllers/authentication");
const apiRoutes = require("./server/controllers/api")

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);


app.listen(PORT, function() {
	console.log(`Server Running on Port: ${PORT}`);
});