const express = require("express");
const keyRoutes = require("./routes/routes");
const bodyParser = require("body-parser");
const path = require("path");
const CORS = require("./config/cors-config")

const app = express();
const expressWs = require('express-ws')(app); 


const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.set("port", PORT);
app.set("env", NODE_ENV);


app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

app.use(CORS);



app.use("/api", keyRoutes);




app.get("/", function(req, res) {
  res.send("Welcome Monks");
  res.end()
});


app.listen(PORT, function() {
  console.log("running in " + PORT);
});
