const express = require('express');
const app = express();

/**
 * se necesita para poder manejar el body de las requests
 */
app.use(express.json());

app.get('/status', function(req, res) {
  res.send("The app is running!");
});

const DB = [];

/**
 * CREATE
 */
app.post('/api/memes', function(req, res) {
  DB.push(req.body);
  res.send(req.body);
});

/**
 * READ
 */
app.get('/api/memes', function(req, res) {
  res.send(DB);
});

app.get('/api/memes/:memeid', function(req, res) {
  const id = req.params.memeid;
  for (let i = 0; i < DB.length; i++) {
    if (DB[i].id === id) {
      res.send(DB[i]);
    }
  }
});

/**
 * UPDATE
 */
app.put('/api/memes/:memeid', function(req, res) {
  const id = req.params.memeid;
  const body = req.body;
  for (let i = 0; i < DB.length; i++) {
    if (DB[i].id === id) {
      DB[i].name = body.name;
    }
  }
  res.send("updated");
});

/**
 * DELETE
 */
app.delete('/api/memes/:memeid', function(req, res) {
  const id = req.params.memeid;
  for (let i = 0; i < DB.length; i++) {
    if (DB[i].id === id) {
      DB.splice(i, 1);
    }
  }
  res.send("deleted");
});


app.listen(8080, function() {
  console.log("The server is running");
});
