var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

function createWindow () {
	mainWindow = new BrowserWindow({width: 1280, height: 740});
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