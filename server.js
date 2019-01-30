 const express = require('express');
 const app = express();

 app.use(express.static(__dirname + '/pbulic/dist/public' ));
 //require('./static/routes')(app);


 app.listen(8000, function(){
     console.log('port 8000');
 })