const moongose = require('mongoose');

moongose.connect('mongodb://localhost/angular-auth',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database Connect'))
.catch(err => console.log(err));