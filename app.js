let express = require("express"); // third-party package (not local=> npm install express) 

/* NOTE FOR GIT: 
   create new file called .gitignore - used to specify all the extensions, filenames, directories that git should ignore and NOT push to the cloud
   search node.js gitignore, (https://github.com/github/gitignore/blob/master/Node.gitignore) copy and paste into .gitignore 
   (it compiled all the extensions and temporary files that should not be on the cloud, not part of the source code)
   this reduces the number of changes made in the version control
    enter git init in the terminal, creates .git folder in current file (initalises local repository)
    ON GITHUB: create a new repository and copy and paste command after setting up (option "push an existing repository from the command line")
               This will link the local repository to the remote one 
*/
// SOURCE CONTRL in VS Code will show the number of files changes since the last commit

let app = express(); // instance of express application

// isolation of concerns- each function has 1 task

// need to listen to the homepage (GET request). path = homepage, if request arrives callback function will be executed
app.get("/", function(req,res){
    res.send("Hello to my first Express App!!!");
});

app.get("/about", function(req,res){
    res.send("this is the about page!!!");
});

// add new endpoint/pathname, just add a new GET Statement
app.get("/contactus", function(req,res){
    res.send("this is the Contatct Us page!!!");
});

// if the incoming request is a POST. (No need if req.method anymore)
// callback function executes if POST request arrives
// /calc is the action(pathname)
app.post("/calc", function(req, res){
    // COVERED IN WEEK 4
});

// route parameters expamle using wikipedia, anything after : is considered a parameter
// as long as it has : any value can be placed in the url
// eg. localhost:8080/wiki/Mel
app.get("/wiki/:keyword", function(req, res){
    console.log(req.url); // console will print /wiki/Mel 
    console.log(req.params); // console will print {keyword: 'Mel;}
});

// if GET above didn't exist then error will occur if localhost:8080/wiki/Mel is entered because it doesn't match any pattern
// express parses the URL
// valid input : localhost:8080/wiki/Mel/fit2095/32
app.get("/wiki/:keyword/fit2095/:id", function(req, res){
    console.log(req.url); // console will print /wiki/Mel 
    console.log(req.params); // console will print {keyword: 'Mel', id: '32'}
});

// e.g. localhost:8080/report?name=Tim&age=24&address=Mel
// only put /report because it is wait app is waiting for. Anything after report is the query string
app.get("/report", function(req,res){
    console.log(req.url); // console will print /report?name=Tim&age=24&address=Mel
    console.log(req.query); // console will print {name: "Tim", age: "24", address: "Mel"} - the object sent by the client (inside query, express generated)
    console.log("The name is " + req.query.name); // console will print The name is Tim
});

// listen to port 8080. No need to attach to any methods
app.listen(8080);

// COMPARE TO EXPRESS CODE ABOVE
// let http = require('http');

// // Coding in Js can get very messy (once it scales up), so express is used to improve readability
// // e.g. to parse string, need to import url and other packages
// http.createServer(function(req, res){ // callback function gets called each time a new request is recieved
//     // check if recieved request is a GET or POST
//     if (req.method === "GET"){
//         if (req.url === "/"){ // homepage
//             // send back homepage
//         }
//         else if (req.url==="/about"){ // about page
//            // send about page 
//         }
//         // handle GET request
//     }
//     else if (req.method === "POST"){
//         // handle POST request
//     }
// }).listen(8080);