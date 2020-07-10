const mongoose = require ('mongoose');

const url = 'mongodb://locahost:27017/todo'

mongoose.connect(url, {useNewUrlParser: true});

module.exports = mongoose