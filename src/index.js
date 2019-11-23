const express = require('express');
const app = express();
const cors = require('cors');
require('./database/database');
//Para comunicar con otros servidores
app.use(cors());
app.use(express.json());
app.use('/api',require('./routes/index'));


app.listen(3800);
console.log('Server or port',3800);