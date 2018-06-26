var express = require("express");
var mongoose= require("mongoose");

var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("connect-flash");

var passport=require("passport");

var routes = require("./routes");
var passportsetup=require("passportsetup");
var app = express();

mongoose.connect("mongodb://localhost:27017/Zombie_nest");
app.set("port", process.env.PORT || 3000);

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session ({
    secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4kiVs$s<<MXX",
    resave: true,
    saveUninitialized: true
}));

app.use(flash());
app.use(passport.session());

app.use(routes);

app.use(session({
    secret:""
}))

app.listen(app.get("port"),() => {
    console.log("La aplicacion inicio por el puerto"+ app.get("port"));
});