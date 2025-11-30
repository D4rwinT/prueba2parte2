const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola! Esta es la versión 1.1 de mi aplicación en Azure para la prueba 2 de DevOps.');
});

app.get('/chile', (req, res) => {
  res.send('Un saludo a todos los chilenos que aportan a esta teletón.');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
