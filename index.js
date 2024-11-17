const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const itemsRoutes = require('./routes/items');
app.use('/items', itemsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});