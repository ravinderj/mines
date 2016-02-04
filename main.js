var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow;

function createWindow () {
	mainWindow = new BrowserWindow({width: 1680, height: 932});
	mainWindow.loadURL('file://' + __dirname + '/app/public/index.html');
	mainWindow.openDevTools();
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
};

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	// if (process.platform !== 'darwin') {
		app.quit();
	// }
});

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
});