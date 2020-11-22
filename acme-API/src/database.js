const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/acmedb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
    .then(db => console.log('Db is connected to', db.connection.host))
    .catch(err => console.error(err));

mongoose.set('useCreateIndex', true);