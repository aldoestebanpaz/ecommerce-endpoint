/**
 * importamos la libreria de mongoose
 */
const mongoose = require('mongoose');

/**
 * nos conectamos a la base de datos
 */
mongoose.connect(
  'mongodb://localhost:27017/ecommercedb',
  { useNewUrlParser: true }
);

module.exports = mongoose;
