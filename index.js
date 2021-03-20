const express = require('express');
const bodyParser = require ('body-parser');

 const app = express();

//Routes in routes folder
 app.use(bodyParser.json());

 require('./routes/dialogFlowRoutes')(app);

 //PORT Setup
 var port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 5000");
});
