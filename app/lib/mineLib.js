var _ = require('lodash');

var Game = function(){
	this.path = this.generatePath();
}

Game.prototype = {
	nextValidMovesFor : function(move){
		var validMoves = [];
		validMoves.push((+move[0]-1)+move[1]);
		validMoves.push((+move[0]+1)+move[1]);
		validMoves.push(move[0]+(+move[1]-1));
		validMoves.push(move[0]+(+move[1]+1));
		return validMoves.filter(function(move){
			return +move >=11 && +move <=99 && +move%10!=0;
		});
	},
	getInitialMoves : function(){
		var range = new Array(1,2,3,4,5,6,7,8,9);
		return range.map(function(e){
			return 9+e.toString();
		});
	},
	generatePath :function(){
		var path = [];
		var starting = this.getInitialMoves();
		var selectedBox = _.sample(starting);
		path.push(selectedBox);
		while(selectedBox[0] != 1){
			var valid = this.nextValidMovesFor(selectedBox);
			selectedBox = _.sample(valid);
			path.push(selectedBox);
		}
		if(path.length >= 20 && path.length <= 30)
			return Object.freeze(path);
		return this.generatePath();
	},
	isOverMine : function(move,validMoves){
		return this.path.indexOf(move) == -1;
	},
	hasWon : function(move){
		return move[0] == 1 && !this.isOverMine(move);
	},
	isValidMove : function(move,validMoves){
		return validMoves.indexOf(move) != -1;
	},
	restart : function(){
		this.path = this.generatePath();
	},
	statusFor : function(move ,prevValid){
		var status = {validMoves : null ,canProceed : true ,isWon : false};
		 if(this.hasWon(move)){
		 	status.isWon = true;
		 	return status;
		 }
		 if(this.isOverMine(move)){
		 	status.canProceed = false;
		 	return status;
		 }
		 status.validMoves = this.nextValidMovesFor(move);
		 return status;

	}
};

module.exports = Game;


;

// lib.minePackage=function(userMove,solvingPath){
// 	var status = {	validMoves: 	undefined,
// 				 	currentMove: 	undefined,
// 					proceed: 		true,
// 					win: 			false
// 			   	};
// 	if(lib.hasWon(userMove,solvingPath)){
// 		status.proceed = false;
// 		status.win = true;
// 		return status;
// 	}
// 	if(lib.isOverMine(userMove,solvingPath)){
// 		status.proceed = false;
// 		return status;
// 	}
// 	status.validMoves = lib.nextValidMovesFor(userMove);
// 	status.currentMove = userMove;
// 	return status;
// };

