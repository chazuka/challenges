const prime = require('./prime');
const assert = require('assert');

describe('prime', function() {
	describe('#is', function() {
		it('should detect if a number is prime or not and giving a reason when it is not', function() {
			var primes = [{
				number: 1,
				expected: false,
				reason: 'prime must be integer greater than 2',
			}, {
				number: 2,
				expected: true,
			}, {
				number: 3,
				expected: true,
			}, {
				number: 9,
				expected: false,
				reason: '3 is divisor of 9',
			}, {
				number: 11,
				expected: true,
			}, {
				number: 12,
				expected: false,
				reason: '2 is divisor of 12',
			}, {
				number: 13,
				expected: true,
			}, ];
			for (var i = 0; i < primes.length; i++) {
				var o = primes[i]
				assert.equal(prime.is(o.number), o.expected);
				if (!o.expected) {
					assert.equal(prime.why(), o.reason);
				}
			}
		});
	});

	describe('#first', function() {
		it('should giving the first n of prime numbers', function() {
			var primes = prime.first(5);
			assert.equal(primes.length, 5);
			assert.deepEqual(primes, [2,3,5,7,11]);
		});
	});

	describe('#between', function() {
		it('should giving the array of prime numbers between x,y', function() {
			var primes = prime.between(1,15);
			assert.equal(primes.length, 6);
			assert.deepEqual(primes, [2,3,5,7,11,13]);
		});
	});
});