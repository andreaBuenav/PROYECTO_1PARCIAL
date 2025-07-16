const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Datos simulados
const usuarios = [
  { nombre: 'Ana', edad: 25, ciudad: 'Quito' },
  { nombre: 'Luis', edad: 30, ciudad: 'Guayaquil' },
  { nombre: 'Maria', edad: 22, ciudad: 'Cuenca' },
  { nombre: 'Pedro', edad: 25, ciudad: 'Quito' },
  { nombre: 'Andrea', edad: 28, ciudad: 'Quito' }
];

// Ruta GET /usuarios con filtros por query string
app.get('/usuarios', (req, res) => {
  let resultado = usuarios;

  if (req.query.nombre) {
    resultado = resultado.filter(u => u.nombre.toLowerCase() === req.query.nombre.toLowerCase());
  }
  if (req.query.edad) {
    resultado = resultado.filter(u => u.edad == req.query.edad);
  }
  if (req.query.ciudad) {
    resultado = resultado.filter(u => u.ciudad.toLowerCase() === req.query.ciudad.toLowerCase());
  }

  res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});