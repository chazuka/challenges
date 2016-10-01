/**
 * ChessBoard, a simple javascript for drawing chessboard with symbols
 * part of previous daily challenge at Kosong Satu Network's Tech
 * @author Komang Arthayasa <komang@chazzuka.com>
 */
module.exports = {
    ChessBoard: function() {
        'use strict';
        var _d = 8;
        var symbols = {
            king: '[#]',
            queen: '[*]',
            rook: '[+]',
            bishop: '[:]',
            knight: '[?]',
            pawn: '[.]',
            even: '[o]',
            odd: '[x]',
            line: '\n'
        };

        function walk(cb) {
            for (var i = _d; i > 0; i--) cb(i);
        }

        function gov() {
            var r = '';
            walk(function(i) {
                if (i === 1 || i === _d) r += symbols.rook;
                else if (i === 2 || i === 7) r += symbols.bishop;
                else if (i === 3 || i === 6) r += symbols.knight;
                else if (i === 4) r += symbols.king;
                else r += symbols.queen;
            });
            r += symbols.line;
            return r;
        }

        function troops() {
            var r = '';
            walk(function() {
                r += symbols.pawn;
            });
            r += symbols.line;
            return r;
        }

        function field(isRowEven) {
            var r = '';
            walk(function(i) {
                if (isRowEven) {
                    r += (i % 2 === 0) ? symbols.odd : symbols.even;
                } else {
                    r += (i % 2 === 0) ? symbols.even : symbols.odd;
                }
            });
            r += symbols.line;
            return r;
        }

        function draw() {
            var b = '';
            walk(function(i) {
                if (i === 1 || i === _d) b += gov();
                else if (i === 2 || i === 7) b += troops();
                else b += field((i % 2 === 0));
            });
            return b;
        }

        return {
            draw: draw,
            symbols: symbols
        };
    }
};