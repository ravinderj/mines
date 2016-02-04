var remote = require('remote');
var player = "🐞";

window.onload = function(){
	$('.steps').click(function (e) {
		var window = remote.getCurrentWindow();
		alert(this.id);
	});
}