const express = require('express')
const app = express()


app.get('/', function(req, res) {
  res.send("Hello World!")
})
const port = process.env.port ||3000
app.listen(port, function() {
  console.log("App Started on 3000")
});
