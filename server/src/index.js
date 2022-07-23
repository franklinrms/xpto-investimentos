const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(require('./routers'));

app.use(require('./middlewares/errorHandler'));

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log('Online');
});