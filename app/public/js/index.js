var $ = require('jquery');
var path = require('path')
var {remote} = require('electron');

var renderMinesPage = function(){
       var window = remote.getCurrentWindow();
       var url = path.join('file://', __dirname,'../mines.html')
       window.loadURL(url);
};
var renderHelpPage = function(){
       var window = remote.getCurrentWindow();
       var url = path.join('file://', __dirname,'../help.html')
       window.loadURL(url);
}
var onReady = function(){
       $('#play-btn').click(renderMinesPage);
       $('#help-btn').click(renderHelpPage);
}

$( document ).ready(onReady);
