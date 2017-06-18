var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.json({sample: "hello world"});
    console.log("Alive API ! ");
});

app.listen(port, function () {
    console.log("Running on PORT : " + port);
})