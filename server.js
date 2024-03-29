let express = require("express");
let app = express(); 

app.get('/add/:no1/:no2', function(req, res){
    // route parameters get sent in as a string so it must be converted to do number operations
    // params is an object automatically generated by express
    let n1 = parseInt(req.params.no1); //parseInt accepts string and gives back a number
    let n2 = parseInt(req.params.no2);

    let result = n1 + n2;
    res.send("The output is " + result);
});

app.get('/sub', function(req, res){ // sub fuction is working with query strings, only put pathname /sub
    // express will automatically parse the query string and store it into query object in req.query
    let n1 = parseInt(req.query.no1); // input comes from the query string
    let n2 = parseInt(req.query.no2);

    let result = n1 - n2;
    res.send("The output is " + result);
});

app.listen(8080);