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
)

func Chessboard() string {
	num := 8
	swap := func(c string) string {
		if c == SEven {
			return SOdd
		}
		return SEven
	}
	board := make([]string, num, num)
	for i := 0; i < num; i++ {
		row := ""
		for j := 0; j < num; j++ {
			switch i {
			case 0, 7:
				switch j {
				case 0, 7:
					row += SRook
				case 1, 6:
					row += SBishop
				case 2, 5:
					row += SKnight
				case 3:
					row += SQueen
				case 4:
					row += SKing
				}
			case 1, 6:
				row += SPawn
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
				row += s
			}
		}
		board[i] = row
	}
	return strings.Join(board, "\n")
}
