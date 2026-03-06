const express = require('express');
require('dotenv').config();
const urlRoutes = require('./routes/urlRoutes'); // Importa as rotas

const app = express();
app.use(express.json());

// Usa as rotas
app.use('/', urlRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT}`);
});