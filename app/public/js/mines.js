var $ = require('jquery');
var path = require('path');
var remote = require('remote');
var Game = require('../../lib/mineLib');
var game = new Game();
var validMoves = game.getInitialMoves();

var showCurrentMove = function(move){
	removeCharecter();
	$('.green').removeClass('green');	
	$('#'+move).addClass('green');
	$('#'+move).html("🐞");
}

var showValidMoves = function(moves){
	validMoves = moves;
	$('.yellow').removeClass('yellow')
	moves.forEach(function(move){
		$('#'+move).addClass('yellow');
	});
};
var showWinner = function(){
	$('.home').append("🐞");
	$('.home').css('font-size','80px');
	removeCharecter();
	removeMarker();
	var message = 'CONGRATS!!!!!!\n Yòü Hãveë Rêäčhed Hømę..';
	setTimeout(goToHome ,2000,message);
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
	divs = $('.steps');
	[].slice.call( divs ).forEach(function ( div ) {
	    div.innerHTML = '';
	});
};

var removeMarker = function(){
	$('.steps').removeClass('red')
		.removeClass('green')
		.removeClass('yellow');	
};

var proceed = function(move){
	var status = game.statusFor(move);
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
		setTimeout(backToStart , 500);
	}
};

var goToHome = function(message){
	if(message){
		alert(message);
	}
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