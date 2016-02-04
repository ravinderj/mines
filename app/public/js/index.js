var path = require('path')
var remote = require('remote');

window.onload = function(){
       document.getElementById("play-btn").addEventListener("click", function (e) {
              var window = remote.getCurrentWindow();
              var url = path.join('file://', __dirname,'../mines.html')
              window.loadURL(url); 
       });
       document.getElementById("help-btn").addEventListener("click", function (e) {
              var window = remote.getCurrentWindow();
              var url = path.join('file://', __dirname,'../help.html')
              window.loadURL(url); 
       });
};
