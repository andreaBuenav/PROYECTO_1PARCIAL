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
app.get('/hinchas', (res) => {
  res.json(hinchas);
});

app.listen(PORT, () => {
  console.log(`API corriendo en ${URL}`);
});