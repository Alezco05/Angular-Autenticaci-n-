const express = require('express');
const app = express();

require('./database/database');

app.use(express.json());
app.use('/api',require('./routes/index'));


app.listen(3800);
console.log('Server or port',3800);