package main

import (
	"fmt"
	"math"
)

const Min = 2

type Prime struct{}

func (p Prime) Is(n int) error {
	if n < Min {
		return fmt.Errorf("prime must be integer greater than %d", Min)
	}

	divider := int(math.Floor(math.Sqrt(float64(n))))
	for i := Min; i <= divider; i++ {
		if n%i == 0 {
			return fmt.Errorf("%d is divisor of %d", i, n)
		}
	}

	return nil
}

func (p Prime) First(n int) []int {
	var (
		r         []int = []int{}
		count     int   = 0
		iteration int   = Min
	)
	for count < n {
		if err := p.Is(iteration); err == nil {
			r = append(r, iteration)
			count++
		}
		iteration++
	}
	return r
}

func (p Prime) Between(x, y int) []int {
	var r []int = []int{}
	if x < Min {
		x = Min
	}

	for i := x; i <= y; i++ {
		if err := p.Is(i); err == nil {
			r = append(r, i)
		}
	}
	return r
}
