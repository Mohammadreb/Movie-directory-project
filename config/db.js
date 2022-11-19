// mongoose: To store data in mongodb and get and update the data(Basicallly for CRUD operation).
const mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/MovieDB';
const connection = mongoose.createConnection(url);
module.exports = connection;