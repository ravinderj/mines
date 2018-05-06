var path = require('path');
let $ = require('jquery');
var {remote} = require('electron');

var goToHome = function(){
	var mainWindow = remote.getCurrentWindow();
	var url = path.join('file://', __dirname,'../index.html')
	mainWindow.loadURL(url);
};

$('.back').click(function(){
	goToHome();
});
