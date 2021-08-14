const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ))

// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@shopshopcluster.bezyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// })
// .then(() => {
//   // app.listen(3000)
//   console.log( 'Database Connected' )
// }).catch(err => {
//   console.log(err)
// })


// mongoose.connection.on("connected", () => {
//   console.log("Connect Success")
// })

// mongoose.connection.on("error", (err) => {
//   console.log("error", err)
// })

module.exports = mongoose.connection;  
