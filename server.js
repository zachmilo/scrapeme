const express = require("express"),
// exphbs  = require("express-handlebars"),
//pages = require("./routes/pageRoutes"),
bodyParser = require("body-parser");

let path = require("path");
let app = express();

const PORT = process.env.PORT || 8081;

let mongoose = require("mongoose");
mongoose.Promise = Promise;
let db = require("./mongoConfig");
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected");
  const scraped = require("./app/scrapePage"),
  pages = require("./routes/pageRoutes");

  app.use(pages);
});
//43200000 every twelve hours

app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
