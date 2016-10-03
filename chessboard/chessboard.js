/**
 * ChessBoard, a simple javascript for drawing chessboard with symbols
 * part of previous daily challenge at Kosong Satu Network's Tech
 * @author Komang Arthayasa <komang@chazzuka.com>
 */
module.exports = {
    ChessBoard: function() {
        'use strict';
        var num = 8;
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

        // 1st draw option
        function method_one() {
            var num = 8;
            var swap = function(c) {
                if (c == symbols.even) {
                    return symbols.odd;
                }
                return symbols.even;
            }
            var board = [];
            for (var i = 0; i < num; i++) {
                var row = ""
                for (var j = 0; j < num; j++) {
                    switch (i) {
                        case 0:
                        case 7:
                            switch (j) {
                                case 0:
                                case 7:
                                    row += symbols.rook;
                                    break;
                                case 1:
                                case 6:
                                    row += symbols.bishop;
                                    break;
                                case 2:
                                case 5:
                                    row += symbols.knight;
                                    break;
                                case 3:
                                    row += symbols.queen;
                                    break;
                                case 4:
                                    row += symbols.king;
                                    break;
                            }
                            break;
                        case 1:
                        case 6:
                            row += symbols.pawn;
                            break;
                        default:
                            var s = (i % 2 == 0) ? symbols.odd : symbols.even;
                            if (j % 2 == 1) {
                                s = swap(s)
                            }
                            row += s
                    }
                }
                board[i] = row
            }
            return board.join("\n")
        } // 1st draw option -->

        // 2nd draw option
        function method_two() {

            var walk = function(cb) {
                for (var i = 0; i < num; i++) cb(i);
            }

            var gov = function() {
                var r = '';
                walk(function(i) {
                    if (i === 0 || i === 7) r += symbols.rook;
                    else if (i === 1 || i === 6) r += symbols.bishop;
                    else if (i === 2 || i === 5) r += symbols.knight;
                    else if (i === 4) r += symbols.king;
                    else r += symbols.queen;
                });
                return r;
            }

            var troops = function() {
                var r = '';
                walk(function() {
                    r += symbols.pawn;
                });
                return r;
            }

            var field = function(is_even) {
                var r = '';
                walk(function(i) {
                    if (is_even) {
                        r += (i % 2 === 0) ? symbols.even : symbols.odd;
                    } else {
                        r += (i % 2 === 0) ? symbols.odd : symbols.even;
                    }
                });
                return r;
            }

            var b = [];
            walk(function(i) {
                if (i == 0 || i == 7) b[i] = gov();
                else if (i == 1 || i == 6) b[i] = troops();
                else b[i] = field((i % 2 == 1));
            });
            return b.join('\n');
        } // 2nd draw option -->

        return {
            draw_one: method_one,
            draw_two: method_two,
            symbols: symbols
        };
    }
};