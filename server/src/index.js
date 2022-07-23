const express = require('express');

const app = express();

app.use(express.json());

app.use(require('./routers'));

const PORT = '3333';

app.listen(PORT, () => {
  console.log('Online');
});