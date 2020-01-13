const express = require('express');
const app = express();

/**
 * se necesita para poder manejar el body de las requests
 */
app.use(express.json());








const mongoose = require('mongoose');

/**
 * nos conectamos a la DB
 */
mongoose.connect('mongodb://localhost:27017/memesdb', {useNewUrlParser: true});

/**
 * definimos el esquema
 */
const memeSchema = new mongoose.Schema({
  name: String,
  image: String,
  year: Number,
  about: String
});

/**
 * creamos el modelo Meme - compilar el esquema
 */
const Meme = mongoose.model('meme', memeSchema);





app.get('/status', function(req, res) {
  res.send("The app is running!");
});

const DB = [];

/**
 * CREATE
 */
app.post('/api/memes', async function(req, res) {
  const doc = await Meme.create(req.body);
  res.send(doc);
});

/**
 * READ
 */
app.get('/api/memes', async function(req, res) {
  const docs = await Meme.find();
  res.send(docs);
});

app.get('/api/memes/:memeid', async function(req, res) {
  const id = req.params.memeid;
  const doc = await Meme.findById(id);
  res.send(doc);
});

/**
 * UPDATE
 */
app.put('/api/memes/:memeid', async function(req, res) {
  const id = req.params.memeid;
  const updatedDoc = await Meme.findByIdAndUpdate(
    id,
    { name: req.body.name }
  );
  res.send({ message: "document updated" });
});

/**
 * DELETE
 */
app.delete('/api/memes/:memeid', async function(req, res) {
  const id = req.params.memeid;
  const deletedDoc = await Meme.findByIdAndDelete(id);
  res.send({ message: "document deleted" });
});


app.listen(8080, function() {
  console.log("The server is running");
});
