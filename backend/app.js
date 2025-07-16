const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Hinchas simulados (se llenará solo con los POST del formulario)
const hinchas = [];

// POST /hinchas - Recibe y guarda los datos del formulario
app.post('/hinchas', (req, res) => {
  const { nombre, ciudad, equipo, mensaje } = req.body;
  if (!nombre || !ciudad || !equipo || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }
  const nuevoHincha = { nombre, ciudad, equipo, mensaje };
  hinchas.push(nuevoHincha);
  res.status(201).json(nuevoHincha);
});

// GET /hinchas - Devuelve todos los hinchas registrados
app.get('/hinchas', (req, res) => {
  res.json(hinchas);
});

// Array simulado de usuarios
const usuarios = [
  { nombre: 'Ana', edad: 25, ciudad: 'Quito' },
  { nombre: 'Luis', edad: 30, ciudad: 'Guayaquil' },
  { nombre: 'Maria', edad: 22, ciudad: 'Cuenca' },
  { nombre: 'Pedro', edad: 25, ciudad: 'Quito' }
];

// GET /usuarios?nombre=Ana&edad=25&ciudad=Quito
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