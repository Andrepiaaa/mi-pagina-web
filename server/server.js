const express = require('express');
const app = express();
// Servir los archivos estáticos de la carpeta 'client'
app.use(express.static('../client'));
const PORT = 3000;

// API dinámica que lee lo que escribes en la URL
app.get('/api/saludo/:nombre', (req, res) => {
  const nombreUsuario = req.params.nombre; // Captura lo que escribiste
  res.json({
    saludo: `¡Hola ${nombreUsuario}!`,
    mensaje: "Tu nombre ha viajado por la URL hasta el servidor",
    fecha: new Date().toLocaleString()
  });
});

// API que busca el botón del Frontend
app.get('/api/usuario', (req, res) => {
  res.json({
    nombre: "Andrea",
    rol: "Analista de Datos",
    tecnologias: ["Node.js", "Linux"],
    nivel: "Full Stack Inicial 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});