const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost:27017/mongoose_express_todos',{
}).then(function(){
	console.log("database connected");
})
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

const mustacheInstance = mustache();
mustacheInstance.cache = null;
app.engine('mustache',mustacheInstance);
app.set('view engine','mustache');
app.set('views',__dirname + '/views');

app.use('/',routes);

app.listen(3000, function(){
	console.log('Listening to 3000');
});