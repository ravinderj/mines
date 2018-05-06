const {app, BrowserWindow} = require('electron');
var mainWindow;

function createWindow () {
	mainWindow = new BrowserWindow({width: 1680, height: 932});
	mainWindow.setResizable(false);
	mainWindow.loadURL('file://' + __dirname + '/app/public/index.html');
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
};

app.on('ready', createWindow);

app.on('window-all-closed', function () {
		app.quit();
});

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
});
