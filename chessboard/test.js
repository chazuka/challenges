const challenge = require('./chessboard');
const assert = require('assert');
describe('ChessBoard', function() {
    it('should return designed chessboard when invoked', function() {
		var expected = '[+][:][?][*][#][?][:][+]\n[.][.][.][.][.][.][.][.]\n[x][o][x][o][x][o][x][o]\n[o][x][o][x][o][x][o][x]\n[x][o][x][o][x][o][x][o]\n[o][x][o][x][o][x][o][x]\n[.][.][.][.][.][.][.][.]\n[+][:][?][*][#][?][:][+]\n';
		var actual = (new challenge.ChessBoard()).draw();
        assert.equal(actual, expected);
    });
});