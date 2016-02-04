var path = require('path');
var remote = require('remote');
var Game = require('../../lib/mineLib');
var game = new Game();
var validMoves = game.getInitialMoves();

console.log(game.path);

var player = "🐞";

var showCurrentMove = function(move){
	removeCharecter();
	$('.green').removeClass('green');	
	$('#'+move).addClass('green');
	$('#'+move).html(player);
}

var showValidMoves = function(moves){
	validMoves = moves;
	$('.yellow').removeClass('yellow')
	moves.forEach(function(move){
		$('#'+move).addClass('yellow');
	});
};
var showWinner = function(){
	$('.home').append(player);
	$('.home').css('font-size','100px');
	removeCharecter();
	removeCharecter();
	setTimeout(goToHome ,2000);
}

var showWrongMove = function(move){
	removeCharecter();
	removeMarker();
	$('#'+move).addClass('red');
}
var backToStart = function(){
	removeCharecter();
	removeMarker();
	main();
}
var removeCharecter = function(){
	divs = document.getElementsByClassName( 'steps' );
	[].slice.call( divs ).forEach(function ( div ) {
	    div.innerHTML = '';
	});
};

var removeMarker = function(){
	$('.steps').removeClass('red').removeClass('green').removeClass('yellow');	
};

var proceed = function(move){
	var status = game.statusFor(move);
	console.log(status);
	if(!game.isValidMove(move ,validMoves)){
		alert('Click From Yellow Boxes');
	}else if(status.isWon){
		removeMarker();
		showCurrentMove(move);
		showWinner();
	}else if(status.canProceed){
		showValidMoves(status.validMoves);
		showCurrentMove(move);
	}else{
		showWrongMove(move);
		setTimeout(backToStart , 2000);
	}
};

var goToHome = function(){
	var mainWindow = remote.getCurrentWindow();
	var url = path.join('file://', __dirname,'../index.html')
	mainWindow.loadURL(url);
};

$('.back').click(function(){
	goToHome(); 
});

$('.steps').click(function(){
	proceed(this.id);
});


var main = function(){
	validMoves = game.getInitialMoves()
	showValidMoves(validMoves);
};
window.onload = main;