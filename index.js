const express = require('express');
const bodyParser = require('body-parser');
const halls = require('./route-handlers/halls');
const users = require('./route-handlers/users')
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.use(halls);
app.use(users);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));