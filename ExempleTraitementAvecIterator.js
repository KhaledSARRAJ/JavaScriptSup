function* mongen(n) {
    for (var i = 0; i < n; i++)
        yield i;
}


function* filter (it, f) {
    for (var e of it)
        if ( f(e) )
            yield e;
}

function* map(it, f) {
	for (var e of it)
    	yield f(e);
}

function* assoc(it1, it2) {
	for (var e of it1)
    	for(var f of it2)
        	if (e.id === f.userId)
            	yield {user: e, post: f};
}


var pairs = filter(mongen(1000), x => !(x % 2))

var cpairs1 = map(pairs, x => x * x)
var cpairs2 = map(filter(map(mongen(1000), x => x * x), x => !(x % 2)), x => x + 1)
var cpairs2 = filter(map(map(mongen(1000), x => x + 1), x => x * x), x => !(x % 2))

var users = [{name: "Joris", id: 1}, {name: "Karl", id: 2}, {name: "Huysmans", id: 3}];
var posts = [];

for (var i = 1; i < 4; i++)
	for (var j = 0; j < 5; j++)
	posts.push({userId: i, text: "text " + i + "." + j});


var it = assoc(users, posts);





