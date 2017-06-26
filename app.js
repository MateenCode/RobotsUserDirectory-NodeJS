const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, respond){
  respond.render('index', {data: data.users})
});


app.get('/:id', function(request, respond){
  var id = request.params.id - 1;

  respond.render('user', {data:data.users[id]})

})


app.listen(3000, function () {
  console.log('UP AND RUNNING!!');
});
