function sort(payload, direction) {
    'use strict';
    var isAscending = (direction !== 'desc');
    var l = payload.length;
    // loop through all items
    for (var x = l - 1; x >= 0; x--) {

        // original comparator value and position
        var origin = payload[x];
        var position = x;

        // loop through precedents items
        for (var y = x - 1; y >= 0; y--) {
            var previous = payload[y];
            if ((isAscending && previous > origin) ||
                (!isAscending && previous < origin)) {
                // alright swap comparator
                origin = previous;
                position = y;
            }
        }

        // need swap? then swap between
        if (position !== x) {
            var t = payload[position];
            payload[position] = payload[x];
            payload[x] = t;
        }
    }

    return payload;
}

// Helper
function run(f) {
    'use strict';
    var start = new Date().getTime();
    var r = f();
    var end = new Date().getTime();
    console.log('|--', (end - start), 'ms');
    return r;
}

// Test
var a = [];
for (var i = 100; i > 0; i--) {
    a.push(Math.floor(Math.random() * 999));
}
console.log('origin', a.join(', '));

var b = run(function() {
    'use strict';
    return sort(a);
});
console.log('ascending', b.join(', '));

var c = run(function() {
    'use strict';
    return sort(a, 'desc');
});
console.log('descending', c.join(', '));
