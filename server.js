// const express = require("express");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.route('/api/shegoes').get((req, res) => {
  res.send({
    shegoes: [{firstName: 'Alicia'}, {lastName: 'Lycan'}]
  });
});

app.route('/api/shegoes/:firstName').get((req, res) => {
  const requestedName = req.params['firstName'];
  res.send({ firstName: requestedName});
});

app.route('/api/shegoes').post((req, res) => {
  res.send(201, req.body);
});

app.route('/api/shegoes').put((req, res) => {
  res.send(200, req.body);
});

app.route('/api/shegoes/:firstName').delete((req, res) => {
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('Server started');
});