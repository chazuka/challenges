package main

import (
	"math/rand"
	"reflect"
	"strconv"
	"strings"
	"testing"
)

// generates_random, generate random array of int based on count and max int item
// not used here.
func generates_random(count int, max int) []int {
	a := make([]int, count)
	for i := count - 1; i >= 0; i-- {
		a[i] = rand.Intn(max)
	}
	return a
}

func int_to_string_arrays(a []int) []string {
	r := []string{}
	for _, v := range a {
		r = append(r, strconv.Itoa(v))
	}
	return r
}

func TestSorting(t *testing.T) {
	collection := []int{8, 98, 9, 77, 27, 87, 1}

	expected := []int{1, 8, 9, 27, 77, 87, 98}
	if !reflect.DeepEqual(expected, SortIntAsc(collection)) {
		t.Errorf("asc orders expected %s got %s",
			strings.Join(int_to_string_arrays(expected), ","),
			strings.Join(int_to_string_arrays(collection), ","))
	}

	expected = []int{98, 87, 77, 27, 9, 8, 1}
	if !reflect.DeepEqual(expected, SortIntDesc(collection)) {
		t.Errorf("desc orders expected %s got %s",
			strings.Join(int_to_string_arrays(expected), ","),
			strings.Join(int_to_string_arrays(collection), ","))
	}
}
