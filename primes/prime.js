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

    var is = function(n) {
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

    var first = function(n) {
        var x = min,
            y = 0,
            r = [];
        while (y < n) {
            if (is(x)) {
                r.push(x);
                y++;
            }
            x++;
        }
        return r;
    }

    var between = function(x, y) {
        var r = [];
        for (var i = x; i <= y; i++) {
            if (is(i)) r.push(i);
        }
        return r;
    }

    var why = function() {
        return reason.get();
    }


    exports.is = is;
    exports.first = first;
    exports.between = between;
    exports.why = why;