/**
 * importamos la libreria de express
 */
const express = require('express');

/**
 * importamos nuestro modelo Product
 */
const Product = require('./product');


/**
 * creamos una app de express
 */
const app = express();
/**
 * necesario para poder manejar requests con json
 */
app.use(express.json());




/**
 * READ
 */
app.get('/api/products', async function(req, res) {
  // const data = [
  //   { brand: "Samsung", model: "J7 Prime", price: 7000 },
  //   { brand: "Motorola", model: "Moto C", price: 6500 },
  //   { brand: "Alcatel", model: "Nose", price: 7700 }
  // ];
  // res.send(data);
  const data = await Product.find();
  res.send(data);
});


/**
 * SEARCH
 */
app.get('/api/products/search', async function(req, res) {
  const docs = await Product.find(req.query);
  res.send(docs);
});






/**
 * CREATE
 */
app.post('/api/products', async function(req, res) {
  const body = req.body;
  const product = await Product.create(body);
  res.send(product);
});



/**
 * DELETE
 */
app.delete('/api/products/:productid', async function(req, res) {
  const id = req.params.productid;
  await Product.findByIdAndDelete(id);
  res.send({
    message: "product deleted"
  });
});

/**
 * UPDATE
 */
app.put('/api/products/:productid', async function(req, res) {
  const id = req.params.productid;
  await Product.findByIdAndUpdate(id, req.body);
  res.send({
    message: "product updated"
  })
});











/**
 * correr la app de express y escuchar en el puerto 8080
 */
app.listen(8080, function() {
  console.log("the server is listening");
});