const express = require('express');
const bodyParser = require('body-parser');
const hallsController = require('./route-handlers/halls/controller');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/halls', hallsController.getHalls);
app.get('/halls/:hallUId', hallsController.getSingleHall);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));