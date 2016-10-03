package main

import (
	"reflect"
	"strconv"
	"strings"
	"testing"
)

func int_to_string_arrays(a []int) []string {
	r := []string{}
	for _, v := range a {
		r = append(r, strconv.Itoa(v))
	}
	return r
}

func TestIsPrime(t *testing.T) {
	type PrimeData struct {
		number int
		reason string
	}
	var primes []PrimeData = []PrimeData{
		{
			number: 1,
			reason: "prime must be integer greater than 2",
		},
		{
			number: 2,
		},
		{
			number: 3,
		},
		{
			number: 9,
			reason: "3 is divisor of 9",
		},
		{
			number: 11,
		},
		{
			number: 12,
			reason: "2 is divisor of 12",
		},
		{
			number: 13,
		},
	}
	prime := Prime{}
	for _, v := range primes {
		expected := (len(v.reason) == 0)
		err := prime.Is(v.number)
		if err != nil && expected {
			t.Errorf("%d expected true got false", v.number)
		}
		if !expected && err.Error() != v.reason {
			t.Errorf("%d expected %s got %s", v.number, v.reason, err.Error())
		}
	}
}

func TestFirstPrimes(t *testing.T) {
	prime := Prime{}
	first_count := 5
	expected := []int{2, 3, 5, 7, 11}
	primes := prime.First(first_count)
	if !reflect.DeepEqual(expected, primes) {
		t.Errorf("first %d primes expected %s got %s",
			first_count,
			strings.Join(int_to_string_arrays(expected), ","),
			strings.Join(int_to_string_arrays(primes), ","))
	}

}

func TestBetweenPrimes(t *testing.T) {
	prime := Prime{}
	x, y := 1, 15
	expected := []int{2, 3, 5, 7, 11, 13}
	primes := prime.Between(x, y)
	if !reflect.DeepEqual(expected, primes) {
		t.Errorf("between %d - %d primes expected %s got %s",
			x,
			y,
			strings.Join(int_to_string_arrays(expected), ","),
			strings.Join(int_to_string_arrays(primes), ","))
	}
}
