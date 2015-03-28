var Prime = function() {
    'use strict';
    var min = 2;
    var reason = (function() {
        var m = '';
        return {
            set: function(r) {
                m = r;
            },
            get: function() {
                return m;
            },
            reset: function() {
                m = '';
            },
        };
    })();

    function isPrime(n) {
        if (n < min) {
            reason.set('prime must be integer greater than 2');
            return false;
        }

        var sqrt = Math.floor(Math.sqrt(n));
        for (var i = min; i <= sqrt; i++) {
            if (n % i === 0) {
                reason.set(i + ' is divisor of ' + n);
                return false;
            }
        }

        reason.reset();
        return true;
    }

    function firstPrimes(n) {
        var x = min,
            y = 0,
            r = [];
        while (y < n) {
            if (isPrime(x)) {
                r.push(x);
                y++;
            }
            x++;
        }
        return r;
    }

    function primesBetween(x, y) {
        var r = [];
        for (var i = x; i <= y; i++) {
            if (isPrime(i)) r.push(i);
        }
        return r;
    }

    return {
        is: isPrime,
        first: firstPrimes,
        between: primesBetween,
        why: function() {
            return reason.get();
        }
    };

};

// Test helpers
function run(f) {
    'use strict';
    var start = new Date().getTime();
    var r = f();
    var end = new Date().getTime();
    console.log('|---', (end - start), 'ms');
    return r;
}

// Test
var p = new Prime();
var primes;

//* is prime?
for (var i = 0; i < 100; i++) {
    var r = Math.floor(Math.random() * 1000000);
    var m = r + (p.is(r) ? ' is a prime' : ' is not a prime! because ' + p.why());
    console.log('|---', m);
}
//*/

//* first n primes
var num = 50000;
primes = run(function() {
    return p.first(num);
});
console.log('the first', num, 'primes are');
console.log(primes.join(', '));
//*/

//* primes between number
var from = 1,
    to = 1000000;
primes = run(function() {
    return p.between(from, to);
});
console.log('there are', primes.length, 'primes between', from, 'to', to);
console.log(primes.join(', '));
//*/
