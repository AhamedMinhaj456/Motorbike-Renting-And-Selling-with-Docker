require('dotenv').config();

const mongoose = require('mongoose');

// const connectionStr = "mongodb+srv://minhaj:minhaj@cluster0.cz1wwgy.mongodb.net/?retryWrites=true&w=majority&dbname=dataBase";
// const connectionStr = "mongodb+srv://jorgelinda768:Linda%405544@motorbikerentingandsell.idozmh0.mongodb.net/?retryWrites=true&w=majority&appName=MotorbikeRentingAndSelling";
const connectionStr = process.env.MONGO_URI;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
