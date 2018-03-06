var express = require('express');
var http = require('http');
var app = express();

app.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    http.get({
      hostname: '192.168.1.145',
      port: 1337,
      path: '/',
      agent: false  // create a new agent just for this one request
    }, (result) => {
      console.log("Ndana amizay jereo le an'i cedy eh");
    });
    // http.get({
    //   hostname: '192.168.1.103',
    //   port: 1337,
    //   path: '/',
    //   agent: false  // create a new agent just for this one request
    // }, (result) => {
    //   console.log("Ndana amizay jereo le an'i iony linux eh");
    // });
    // http.get({
    //   hostname: '192.168.1.137',
    //   port: 1337,
    //   path: '/',
    //   agent: false  // create a new agent just for this one request
    // }, (result) => {
    //   console.log("Ndana amizay jereo le an'i mendrika eh");
    // });
    http.get({
      hostname: '192.168.1.146',
      port: 1337,
      path: '/',
      agent: false  // create a new agent just for this one request
    }, (result) => {
      console.log("Ndana amizay jereo le an'i mirado eh");
    });
});


const exec = require("child_process").exec;
const path = require("path");
const async = require("async");

const projectPath = process.argv[2];
const absolutePath = path.join(__dirname, projectPath);

const cmds = ["git pull"].concat(process.argv.filter((arg, index) => { return index > 2; }));

const execCmds = cmds.map((cmd) => {
    return function(callback) {
        exec(`cd ${absolutePath} && ${cmd}`, {maxBuffer: 1024 * 600}, (err, stdout, stderr) => {
            if(err) return callback(err);
            callback(null, `--- ${cmd} ---:\n stdout: ${stdout} \n stderr: ${stderr}\n`);
        });
    };
});

const updateProject = function(callback) {
    async.series(
        execCmds
    , function(err, results) {
        if(err) return callback(err);
        return callback(null, results.join(""));
    });
};

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    console.log("An event has been detected on the listened port: starting execution...")

    updateProject((e, result) => {
        var response = "";
        if(e) {
            console.error(`exec error: ${e}`);
            response += `exec error: ${e}`;
        }
        if(result) {
            console.log(result);
            response += `\n ${result}`;
        }
        res.end(response);
    });

}).listen(1337);

app.listen(3000);
console.log("Andana amizay mpush oooohhh");