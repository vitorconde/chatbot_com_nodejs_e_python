const express = require("express");
const app = express();
const port = 5000;

let {PythonShell} = require('python-shell')

const path = require('path');


app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(port,()=> { 
    console.log("Servidor rodando.");
})

app.post('/action', function(req, res){
    return res.redirect('/')
})

PythonShell.run("python_app_teste.py",null,function(err,results){
    console.log(results)
    console.log("Error: ",err)
    console.log("Python script finished")
})