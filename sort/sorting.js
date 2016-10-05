function sortInt(payload, direction) {
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
function sortIntAsc(payload) {
    return sortInt(payload, "asc")
}

function sortIntDesc(payload) {
    return sortInt(payload, "desc")
}

exports.sortIntAsc = sortIntAsc
exports.sortIntDesc = sortIntDesc
