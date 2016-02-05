var path = require('path');
var remote = require('remote');

var goToHome = function(){
	var mainWindow = remote.getCurrentWindow();
	var url = path.join('file://', __dirname,'../index.html')
	mainWindow.loadURL(url);
};

$('.back').click(function(){
	goToHome(); 
});