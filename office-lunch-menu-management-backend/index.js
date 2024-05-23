// index.js
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menuRoutes');
const choiceRoutes = require('./routes/choiceRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());

app.use('/api', menuRoutes);
app.use('/api', choiceRoutes);

app.get('/api', async(req,res)=>{
    try {
        res.send("Welcome to Office Lunch System Backend Services")
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
