package main

const (
	ASC  = "asc"
	DESC = "desc"
)

func SortInt(a []int, d string) []int {

	for i := len(a) - 1; i >= 0; i-- {
		current := a[i]
		position := i
		for j := i - 1; j >= 0; j-- {
			prev := a[j]
			if (d == ASC && current < prev) || (d == DESC && current > prev) {
				current = prev
				position = j
			}
		}

		if position != i {
			t := a[position]
			a[position] = a[i]
			a[i] = t
		}
	}

	return a
}

func SortIntAsc(a []int) []int {
	return SortInt(a, ASC)
}

func SortIntDesc(a []int) []int {
	return SortInt(a, DESC)
}
