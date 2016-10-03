const challenge = require('./chessboard');
const assert = require('assert');
describe('ChessBoard', function() {
	var o = new challenge.ChessBoard();
	var expected = '[+][:][?][*][#][?][:][+]\n[.][.][.][.][.][.][.][.]\n[x][o][x][o][x][o][x][o]\n[o][x][o][x][o][x][o][x]\n[x][o][x][o][x][o][x][o]\n[o][x][o][x][o][x][o][x]\n[.][.][.][.][.][.][.][.]\n[+][:][?][*][#][?][:][+]';
	
	describe('#draw_one', function() {
	    it('should return designed chessboard when invoked', function() {
	        assert.equal(o.draw_one(), expected);
	    });
	});

	describe('#draw_two', function() {
	    it('should return designed chessboard when invoked', function() {
	        assert.equal(o.draw_two(), expected);
	    });
	});
});