package main

import "strings"

const (
	SKing   = "[#]"
	SQueen  = "[*]"
	SRook   = "[+]"
	SBishop = "[:]"
	SKnight = "[?]"
	SPawn   = "[.]"
	SEven   = "[o]"
	SOdd    = "[x]"
	SLine   = "\n"
)

func Chessboard() string {
	swap := func(c string) string {
		if c == SEven {
			return SOdd
		}
		return SEven
	}
	board := make([]string, 81, 81)
	for i := 0; i < 8; i++ { // rows
		for j := 0; j < 8; j++ { // columns
			switch i {
			case 0, 7:
				switch j {
				case 0, 7:
					board = append(board, SRook)
				case 1, 6:
					board = append(board, SBishop)
				case 2, 5:
					board = append(board, SKnight)
				case 3:
					board = append(board, SQueen)
				case 4:
					board = append(board, SKing)
				}
			case 1, 6:
				board = append(board, SPawn)
			default:
				var s string
				if i%2 == 0 {
					s = SOdd
				} else {
					s = SEven
				}
				if j%2 == 1 {
					s = swap(s)
				}
				board = append(board, s)
			}
		}
		board = append(board, SLine)
	}
	return strings.Join(board, "")
}
