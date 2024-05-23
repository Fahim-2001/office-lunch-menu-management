// index.js
const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menuRoutes');
const choiceRoutes = require('./routes/choiceRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', menuRoutes);
app.use('/api', choiceRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
