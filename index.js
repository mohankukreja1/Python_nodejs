const express = require('express');
const path = require('path');

const body_parser=require('body-parser');

const spawn = require("child_process").spawn;
const app = express();
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.get('/', express.static(path.join(__dirname ,'./frontend')));
app.post('/test',function(req,res){
    const pythonProcess = spawn('python',["script.py", req.body.first, req.body.second]);

    pythonProcess.stdout.on('data', (data) => {
        // Do something with the data returned from python script
        console.log(data.toString());
    });
})


app.listen('4000',function(req,res){
    console.log('server started');
})
