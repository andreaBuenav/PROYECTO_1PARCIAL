const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const hinchas = [];

// POST /hinchas - Recibe y guarda los datos del formulario
app.post("/hinchas", (req, res) => {
  const { nombre, ciudad, equipo, mensaje } = req.body;
  if (!nombre || !ciudad || !equipo || !mensaje) {
    return res
      .status(400)
      .json({ error: "Todos los campos son obligatorios." });
  }
  const nuevoHincha = { nombre, ciudad, equipo, mensaje };
  hinchas.push(nuevoHincha);
  res.status(201).json(nuevoHincha);
});

// GET /hinchas - Devuelve todos los hinchas registrados
app.get("/hinchas", (req, res) => {
  res.json(hinchas);
});

// DELETE /hinchas - Elimina todos los hinchas registrados
app.delete("/hinchas", (req, res) => {
  hinchas.length = 0; // Vacía el array
  res.status(200).json({ mensaje: "Todos los hinchas han sido eliminados." });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
