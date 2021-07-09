


function myNumbers(n) {
	var x = 0;
	var it = {
		next: function () {
			return {
				done: x >= n,
				value: x++,
			};
		}
		
	};

	return {
		[Symbol.iterator]: function () {
			return it;
		},
	};
	
}



function* map(it, f) {
	for(var e of it)
		yield f(e);
}



function map(it1, f) {
	itr = ita[Symbol.iterator]();
	var it = {
		next: function () {
        	var e = itr.next();
        	i = e.done ? i : f(i, e.value);
			return {
				done: e.done,
				value: i;
			};
		}
		
	};

	return {
		[Symbol.iterator]: function () {
			return it;
		},
	};
	
}




// [0, 1, 2, 3, 4, 5]
// [0, 1, 3, 6, 10, 15]
// reduce([0, 1, 2, 3, 4, 5], (a, b) => a + b, 0);

// ["0", "01", "012", "0123", "01234", "012345"]
// reduce([0, 1, 2, 3, 4, 5], (a, b) => a + b, "");

// [0, 1, 12, 123, 1234, 12345]
// reduce([0, 1, 2, 3, 4, 5], (a, b) => a * 10 + b, 0);




function reduce(ita, f, i) {
	itr = ita[Symbol.iterator]();
	var it = {
		next: function () {
        	var e = itr.next();
        	i = e.done ? i : f(i, e.value);
			return {
				done: e.done,
				value: i;
			};
		}
		
	};

	return {
		[Symbol.iterator]: function () {
			return it;
		},
	};
	
}