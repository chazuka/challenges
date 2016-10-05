const sorting = require('./sorting');
const assert = require('assert');

describe('SortInt', function() {
	describe('#sortIntAsc', function() {
		it('should sort array of int in asc order', function() {
			var collection = [8, 98, 9, 77, 27, 87, 1]
			var expected = [1, 8, 9, 27, 77, 87, 98]
			assert.deepEqual(sorting.sortIntAsc(collection), expected);
		});
	});
	describe('#sortIntDesc', function() {
		it('should sort array of int in desc order', function() {
			var collection = [8, 98, 9, 77, 27, 87, 1]
			var expected = [98, 87, 77, 27, 9, 8, 1]
			assert.deepEqual(sorting.sortIntDesc(collection), expected);
		});
	});
});