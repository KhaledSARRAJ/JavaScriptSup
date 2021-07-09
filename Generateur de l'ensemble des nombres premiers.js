// Generateur de l'ensemble des nombres premiers

function* premiers(n) {
    var primes = [2];
    yield 2;
    for (var i = 3; true; i += 2) {
        var test = true;
        for (var p of primes)
            if ( !(i % p) ) {
                test = false;
                break;
            }
        if (test) {
            primes.push(i);
            yield i;
        }
        if (i >= n)
        	return;
    }
}

