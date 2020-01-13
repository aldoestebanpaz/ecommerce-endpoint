const mongoose = require('./connection');

/**
 * definimos el esquema de la collection products
 */
const productSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number
});

/**
 * compilamos y creamos el modelo
 * 1er parametro es el nombre de la coleccion que va a contener nuestros documentos
 * 2do parametro es el esquema definido arriba
 */
const Product = mongoose.model('products', productSchema);


/**
 * exportamos el modelo para poder usarlo en otro módulo
 */
module.exports = Product;
