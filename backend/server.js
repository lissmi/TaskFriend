// Importar dependencias
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Configurar dotenv para cargar las variables de entorno
dotenv.config();

// Crear la aplicación de Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Puerto en el que el servidor estará escuchando
const PORT = process.env.PORT || 5000;

// Ruta inicial para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


