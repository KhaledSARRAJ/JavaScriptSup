


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
	var it = {
		next: function () {
			return {
				done: ?????,
				value: ????;
			};
		}
		
	};

	return {
		[Symbol.iterator]: function () {
			return it;
		},
	};
	
}





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