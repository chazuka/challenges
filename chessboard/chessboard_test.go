package main

import "testing"

func TestChessboard(t *testing.T) {
	var expected string = "[+][:][?][*][#][?][:][+]\n[.][.][.][.][.][.][.][.]\n[x][o][x][o][x][o][x][o]\n[o][x][o][x][o][x][o][x]\n[x][o][x][o][x][o][x][o]\n[o][x][o][x][o][x][o][x]\n[.][.][.][.][.][.][.][.]\n[+][:][?][*][#][?][:][+]"
	var actual string = Chessboard()
	if actual != expected {
		t.Errorf("expected %s got %s", expected, actual)
	}
}
