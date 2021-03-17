const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ))

module.exports = mongoose.connection; 
